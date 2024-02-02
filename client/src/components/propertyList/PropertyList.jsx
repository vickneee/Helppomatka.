import "./propertyList.css";
import MokkitImage from "./images/saad-chaudhry-v9qKtDuq9Lk-unsplash.jpg"
import HuvilatImage from "./images/john-fornander-y3_AHHrxUBY-unsplash.jpg"
import LomakeskusImage from "./images/gerson-repreza-CepDpEiALqM-unsplash.jpg"
import AsuntoImage from "./images/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg"
import HotelliImage from "./images/markus-spiske-g5ZIXjzRGds-unsplash.jpg"

const PropertyList = () => {
  return (
      <div className="pList">
          <div className="pListItem">
              <img
                  src={AsuntoImage}
                  alt=""
                  className="pListImg"
              />
              <div className="pListTitles">
                  <h1>Asunnot</h1>
                  <h2>2809 asuntoa</h2>
              </div>
          </div>
          <div className="pListItem">
              <img
                  src={MokkitImage}
                  alt=""
                  className="pListImg"
              />
              <div className="pListTitles">
                  <h1>Mökit</h1>
                  <h2>621 mökkiä</h2>
              </div>
          </div>
          <div className="pListItem">
              <img
                  src={HotelliImage}
                  alt=""
                  className="pListImg"
              />
              <div className="pListTitles">
                  <h1>Hotellit</h1>
                  <h2>230 hotellia</h2>
              </div>
          </div>
          <div className="pListItem">
              <img
                  src={LomakeskusImage}
                  alt=""
                  className="pListImg"
              />
              <div className="pListTitles">
                  <h1>Lomakeskukset</h1>
                  <h2>38 lomakeskuksta</h2>
              </div>
          </div>
          <div className="pListItem">
              <img
                  src={HuvilatImage}
                  alt=""
                  className="pListImg"
              />
              <div className="pListTitles">
                  <h1>Huvilat</h1>
                  <h2>14 huvilaa</h2>
              </div>
          </div>
      </div>
  );
};

export default PropertyList;
