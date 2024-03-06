import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import "./user_reservations.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const UserReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });


  useEffect(() => {
    const fetchReservations = async () => {
      setLoading(true);
      try {
        const resReservations = await axios.get("http://localhost:8800/api/reservations/");
        const reservationsWithHotelDetails = await Promise.all(
          resReservations.data.map(async (reservation) => {
            const resHotel = await axios.get(`http://localhost:8800/api/hotels/find/${reservation.hotelId}`);
            // Asumiendo que resHotel.data.photos contiene las URLs de las imágenes
            const images = resHotel.data.photos.map(photoUrl => ({
              original: photoUrl,
             
            }));
            return {
              ...reservation,
              hotelDetails: resHotel.data,
              images, // Agrega las imágenes transformadas aquí
            };
          })
        );
        setReservations(reservationsWithHotelDetails);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchReservations();
  }, []);
  

  if (loading) {
    return (
      <div>
        <Header type="reservations" />
        <div className="d-flex justify-content-center">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  if (reservations.length === 0) {
    return (
      <div>
        <Header type="no-reservations" />
      </div>
    );
  }
  return (
<div>
    <Header type="reservations" />
    {reservations.map((reservation) => (
      <div key={reservation._id} className="RItem">
          <div className="box">
            <div>
                <h1 className="hotelTitle">{reservation.hotelDetails.name}</h1>
                <div className="hotelAddress">
                  <span>{reservation.hotelDetails.address}</span>
                </div>
                <div className="hotelPriceHighlight">
                Varauksesi kokonaishinta: {reservation.totalPrice}€
                </div>
            </div>
            

            <div>
            <p className="hotelInfo">
            Reservation number: {reservation.reservationNumber}
            </p>
            <p className="hotelInfo">
            Check in: {reservation.checkInDate}
            </p>
            <p className="hotelInfo">
            Check out: {reservation.checkOutDate}
            </p>
            </div>
          </div>  
      </div>
    ))}
    <Footer/>
  </div>
);
};
export default UserReservations;
      