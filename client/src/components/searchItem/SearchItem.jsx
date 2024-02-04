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
          <img src={hotel.imageUrl} alt="" className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{hotel.title}</h1>
            <span className="siDistance">{hotel.distance}</span>
            <span className="siTaxiOp">{hotel.taxi_op}</span>
            <span className="siSubtitle">
              {hotel.sub_title}
            </span>
            
            <span className="siCancelOp">{hotel.cancel_op}</span>
            <span className="siCancelOpSubtitle">
              {hotel.cancel_op_subtitle}
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>{hotel.rating_name}</span>
              <button>{hotel.rating_value}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">{hotel.price}</span>
              <span className="siTaxOp">{hotel.taxes}</span>
              <button className="siCheckButton">Katso saatavuus</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchItem;
