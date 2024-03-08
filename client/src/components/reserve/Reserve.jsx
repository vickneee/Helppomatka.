import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./reserve.css";
import useFetch from "../../services/useFetch";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import success from "./image/success-svgrepo-com.svg";
import { format } from "date-fns";

const updateRoomAvailability = async (roomId, unavailableDates) => {
  try {
    const response = await axios.put(
      `https://helppomatka.onrender.com/api/rooms/availability/${roomId}`,
      {
        unavailableDates,
      }
    );
    console.log("Room status has been updated.", response.data);
  } catch (error) {
    console.error("Error updating room availability:", error);
  }
};

const Reserve = ({ setOpen, hotelId, totalPrice }) => {
  const { user } = useContext(AuthContext);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading } = useFetch(
    `https://helppomatka.onrender.com/api/hotels/room/${hotelId}`
  );
  const { dates } = useContext(SearchContext);
  const [modal, setModal] = useState(false);
  const [copy, setCopy] = useState(false);
  const [reservationNumberForUI, setReservationNumberForUI] = useState("");

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    /* const date = new Date(start.getTime()); */

    const dates = [];
    const date = new Date(start);
    while (date <= end) {
      const adjustedDate = new Date(date.getTime() + 3 * 60 * 60 * 1000);
      dates.push(adjustedDate.toISOString().split("T")[0]);
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };
  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
  const isAvailable = (roomNumber) => {
    // Converting all dates to a format YYYY-MM-DD to compare.
    const formattedSelectedDates = alldates.map(
      (date) => new Date(date).toISOString().split("T")[0]
    );

    const isFound = roomNumber.unavailableDates.some((date) => {
      const formattedUnavailableDate = new Date(date)
        .toISOString()
        .split("T")[0];
      return formattedSelectedDates.includes(formattedUnavailableDate);
    });

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    const startDateStr = format(new Date(alldates[0]), "yyyy-MM-dd");
    const endDateStr = format(
      new Date(alldates[alldates.length - 1]),
      "yyyy-MM-dd"
    );
    // This is to add to the random reservation number, random can be repeated,
    // so we add the check in date to the being of random.
    const reservationNumber = `${format(
      dates[0].startDate,
      "yyyyMMdd"
    )}-${Math.random().toString(36).substring(2, 12)}`;

    setReservationNumberForUI(reservationNumber);

    const reservationData = {
      userId: user._id,
      hotelId: hotelId,
      roomId: selectedRooms,
      checkInDate: startDateStr,
      checkOutDate: endDateStr,
      guestCount: 2,
      totalPrice: totalPrice,
      status: "confirmed",
      reservationNumber: reservationNumber,
    };
    try {
      // Trying to create the reservation here.
      const reservationResponse = await axios.post(
        "https://helppomatka.onrender.com/api/reservations/",
        reservationData
      );
      console.log("Success making reservation:", reservationResponse.data);

      // Updating availability of  rooms in database with unavailability date.
      await Promise.all(
        selectedRooms.map((roomId) => {
          // CheckOutDate is an available date. We delete it from alldates.
          const updatedUnavailableDates = alldates.slice(0, alldates.length - 1);
          return updateRoomAvailability(roomId, updatedUnavailableDates);
        })
      );

      console.log("Room availability updated!.");
      setModal(true);
    } catch (error) {
      console.error("Error during operation:", error);
    }
  };

  return (
    <div className="reserve">
      <ToastContainer autoClose={500} />
      <div className="rContainer">
        {modal === false && (
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="rClose"
            onClick={() => setOpen(false)}
          />
        )}
        {modal === false && (
          <div>
            <span>Varaa huoneesi:</span>
            <br />
            {loading ? (
              <div className="d-flex justify-content-center">
                <div className="lds-hourglass"></div>
              </div>
            ) : (
              data.map((item) => (
                <div className="rItem" key={item._id}>
                  <div className="rItemInfo">
                    <div className="rTitle">{item.title}</div>
                    <div className="rDesc">{item.desc}</div>
                    <div className="rMax">
                      Max ihmisia: <b>{item.maxPeople}</b>
                    </div>
                  </div>
                  <div className="rSelectRooms">
                    {item.roomNumbers.map((roomNumber) => (
                      <div className="room">
                        <input
                          className="checkbox"
                          type="checkbox"
                          value={roomNumber._id}
                          onChange={handleSelect}
                          disabled={!isAvailable(roomNumber)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}

            <button
              onClick={handleClick}
              className={
                selectedRooms.length === 0 ? "rButton active" : "rButton"
              }
              disabled={selectedRooms.length === 0}
            >
              Varaa nyt!
            </button>
          </div>
        )}
        {modal === true && (
          <div className="feedback">
            <div className="d-flex justify-content-center">
              <img src={success} width="57" height="57" alt="" />
            </div>
            <p>Varaus tehty onnistuneesti</p>
            <p className="id">
              <span className="book">Varaus id</span>:{" "}
              <span>{reservationNumberForUI}</span>
              <i
                onClick={() => {
                  navigator.clipboard.writeText(random);
                  setCopy(true);
                  setTimeout(() => {
                    setCopy(false);
                  }, 1000);
                }}
                s
                className="bx ms-2 bx-copy tooltips"
              >
                {copy && <span className="tooltip-text">Copied</span>}
              </i>
            </p>
            <div className="button-cont d-flex justify-content-center">
              <button
                onClick={() => {
                  navigate("/hotels", {
                    state: {
                      destination: "",
                      dates,
                      options: {
                        adult: 1,
                        children: 0,
                        room: 1,
                      },
                    },
                  });
                }}
                className="btn explore btn-md me-2 btn-primary"
                type="button"
              >
                Tutki
              </button>
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="btn home btn-md btn-primary"
                type="button"
              >
                Kotisivu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reserve;
