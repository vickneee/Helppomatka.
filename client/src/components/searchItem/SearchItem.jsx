import "./searchItem.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const SearchItem = () => {
  const location = useLocation();
  const [filteredHotels] = useState(location.state.filteredHotels);

  return (
    <div>
      {filteredHotels.map((hotel, index) => (
        <div key={index} className="searchItem">
          <img src={hotel.photos[0]} alt="" className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{hotel.name}</h1>
            <span className="siDistance">{hotel.distance}</span>
            <span className="siSubtitle">{hotel.title}</span>
            <span className="siCancelOp">{hotel.desc}</span>
            <span className="siCancelOpSubtitle">{hotel.city}</span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <button>{hotel.rating}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">{hotel.cheapestPrice.toFixed(2)} €</span>
              <button className="siCheckButton">Katso saatavuus</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchItem;
