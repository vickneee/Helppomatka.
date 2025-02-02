import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // Main css file
import "react-date-range/dist/theme/default.css"; // Theme css file
import { format } from "date-fns";
import { SearchContext } from "../../context/SearchContext";
import video from "./image/hotel-video.mp4";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
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

  const { dispatch } = useContext(SearchContext);
  
  const handleSearch = () => {
    
    dispatch({
      type: "NEW_SEARCH",
      payload: { destination, dates, options },
    });
    navigate("/hotels", { state: { destination, dates, options } });
    
  };

  return (
    <div className={type === "list" ? "header otherPages" : "header"}>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="headerContainer container">
        <Navbar />

        {type === "no-reservations" && (
          <div className="headerCont">
            <h2 className="headerTitle-e text-center">
            Ei varauksia vielä. Tee uusi varaus nyt!
            </h2>
            <button
            onClick={() => {
              dispatch({
                type: "NEW_SEARCH",
                payload: { destination, dates, options },
              });
              navigate("/hotels", { state: { destination, dates, options } });
            }}
            className="siCheckButton"
          >
            Tee varaus
          </button>
          </div>
        )}

        {type === "reservations" && (
          <div className="headerCont">
            <h2 className="headerTitle headerTitle-r text-center">
              Tervetuloa, tässä ovat varauksesi
            </h2>
          </div>
        )}

        {type === "list" && (
          <div className="headerCont">
            <h2 className="headerTitle text-center">Unelmoitko lomastasi?</h2>
          </div>
        )}

        {type !== "list" && type !== "reservations" && type !== "no-reservations" && (
          <div className="headerCont">
            <>
              <div className="row headerWrapper">
                <div className="col-md-10 col-10">
                  <h1 className="headerTitle">Unelmoitko lomastasi?</h1>
                  <p className="headerDesc">
                    Anna meidän auttaa sinua löytämään täydellinen kohde
                    seuraavaa seikkailuasi varten!
                  </p>
                  <div className="col-md-12 button-cont"></div>
                </div>
              </div>
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <i className="bx bx-location-plus headerIcon"></i>
                  <select
                    className="headerSearchSelect"
                    onChange={(e) => setDestination(e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Mihin matkustat?
                    </option>
                    <option value="Helsinki">Helsinki, Suomi</option>
                    <option value="Tallinna">Tallinna, Viro</option>
                    <option value="Marrakech">Marrakech, Morokko</option>
                    <option value="Puerto Viejo">
                      Puerto Viejo, Costa Rica
                    </option>
                  </select>
                </div>
                <div className="headerSearchItem">
                  <i className="bx bxs-calendar-plus headerIcon"></i>
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(dates[0].startDate, "dd.MM.yyyy")} to ${format(
                    dates[0].endDate,
                    "dd.MM.yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <i className="bx bxs-user headerIcon"></i>
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
                <div className="headerSearchButton">
                  <button
                    className={
                      destination === "" ? "headerBtn2 active" : "headerBtn2"
                    }
                    onClick={handleSearch}
                    disabled={destination === ""}
                  >
                    Etsi
                  </button>
                </div>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
