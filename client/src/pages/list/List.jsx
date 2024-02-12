import "./list.css";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import fetchHotels from "../../services/fetchHotels";

const List = () => {
  const [hotels, setHotels] = useState([]); // Original data from the API

  useEffect(() => {
    fetchHotels().then((hotels) => setHotels(hotels));
  }, []);

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [filteredHotels, setFilteredHotels] = useState(
    location.state.filteredHotels
  );
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    setFilteredHotels(hotels);
  }, [hotels]); // Dependency on `hotels` to react to chan

  const handleSearchInList = () => {
    const newFilteredHotels = filteredHotels.filter((hotel) =>
      hotel.city.toLowerCase().includes(destination.toLowerCase())
    );
    setFilteredHotels(newFilteredHotels);
  };

  function searchingCity(destination) {
    const destinations = {
      helsinki: "Helsinki, Suomi",
      tallinna: "Tallinna, Viro",
      marrakech: "Marrakech, Marokko",
      "puerto viejo": "Puerto Viejo, Costa Rica",
    };
    const key = destination.toLowerCase();
    return destinations[key] || destination;
  }

  return (
    <div>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Etsi</h1>
            <div className="lsItem">
              <label>Mihin matkustat?</label>
              {/* <input
                type="text"
                onChange={(e) => setDestination(e.target.value)}
              /> */}
              <select
                onChange={(e) => setDestination(e.target.value)}
                value={searchingCity(destination)}
              >
                <option value=""></option>
                <option value="Helsinki, Suomi">Helsinki, Suomi</option>
                <option value="Marrakech, Marokko">Marrakech, Marokko</option>
                <option value="Tallinna, Viro">Tallinna, Viro</option>
                <option value="Puerto Viejo, Costa Rica">Puerto Viejo, Costa Rica</option>
              </select>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd.MM.yyyy"
              )} to ${format(date[0].endDate, "dd.MM.yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleSearchInList}>Etsi</button>
          </div>
          <div className="listResult">
            <SearchItem
              filteredHotels={filteredHotels}
              setFilteredHotels={setFilteredHotels}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
