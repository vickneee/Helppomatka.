import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./searchItem.css";

const SearchItem = ({ item }) => {

  return (
    <div className="col-md-12 col-sm-6">
      <div
        className="searchItem"
      >
        <img src={item.photos[0]} alt="" className="siImg" />

        <div className="mobileDesc">
          <h4 className="mt-3">{item.name}</h4>
          {item.rating && (
            <Rating
              name="half-rating-read"
              defaultValue={item.rating}
              precision={0.5}
              readOnly
            />
          )}

          <div className="mobileDescFooter">
            <div className="left">
              <h5>${item.cheapestPrice}</h5>
              <h6>Per yö</h6>
            </div>
            <div className="right">
              <Link to={`/hotels/${item._id}`}>
                <button>Varaa nyt</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="siDesc">
          <h1 className="siTitle">{item.name}</h1>
          <span className="siDistance">{item.distance}m keskustasta</span>
          <span className="siTaxiOp">Ilmainen lentokenttätaksi</span>
          <span className="siSubtitle">
            {item.desc}
          </span>
          <span className="siCancelOp">Ilmainen peruutus </span>
          <span className="siCancelOpSubtitle">
          Voit peruuttaa myöhemmin, joten lukitse tämä loistava hinta jo tänään!
          </span>
        </div>
        <div className="siDetails">
          {item.rating && (
            <div className="rating-cont d-flex justify-content-end">
              <Rating
                name="half-rating-read"
                defaultValue={item.rating}
                precision={0.5}
                readOnly
              />
            </div>
          )}
          <div className="siDetailTexts">
            <span className="siPrice">{item.cheapestPrice}€</span>
            <span className="siTaxOp">Sisältää verot ja maksut</span>
            <Link to={`/hotels/${item._id}`}>
              <button className="siCheckButton">Katso saatavuus</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
