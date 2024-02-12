import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import fetchHotels from "../../services/fetchHotels";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  /*To save  filtered hotels after user search for a specific destination*/
  const [hotels, setHotels] = useState([]); // Original data from the API

  useEffect(() => {
    fetchHotels().then((hotels) => setHotels(hotels));
  }, []);

  // Filtered data to display
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    setFilteredHotels(hotels);
  }, [hotels]); // Dependency on `hotels` to react to changes

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  /* Check if the 'value' of the 'city' field includes the word stored
in the variable 'destination' */
  const handleSearch = () => {
    const newFilteredHotels = filteredHotels.filter((hotel) =>
      hotel.city.toLowerCase().includes(destination.toLowerCase())
    );
    setFilteredHotels(newFilteredHotels);
    navigate("/hotels", {
      state: { date, options, destination, filteredHotels: newFilteredHotels },
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <Navbar />
        {type !== "list" && (
          <>
            <div className="flex-center">
              <h1 className="headerTitle">Unelmoitko lomastasi?</h1>
              <p className="headerDesc">
                Anna meidän auttaa sinua löytämään täydellinen kohde seuraavaa
                seikkailuasi varten!
              </p>
            </div>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon bedIcon" />
                {/* <input
                  type="text"
                  placeholder="Mihin matkustat?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                /> */}
                <select
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Mihin matkustat?
                  </option>
                  <option value="Helsinki">Helsinki, Suomi</option>
                  <option value="Marrakech">Marrakech, Marokko</option>
                  <option value="Tallinna">Tallinna, Viro</option>
                  <option value="Puerto Viejo">
                    Puerto Viejo, Costa Rica
                  </option>
                </select>
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd.MM.yyyy")} - ${format(
                  date[0].endDate,
                  "dd.MM.yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} aikuinen · ${options.children} lapsi · ${options.room} huone`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Aikuinen</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Lapsi</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Huone</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Etsi
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
