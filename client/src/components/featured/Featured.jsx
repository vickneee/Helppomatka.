import useFetch from "../../services/useFetch.js";
import { useNavigate } from "react-router-dom";
import "./featured.css";

const Featured = () => {
  const { data, loading } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=Helsinki,Marrakech,Tallinna,Puerto Viejo"
  );
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="homeTitle mb-3">Kiinteistöt kaupungeittain</h1>
      <div className="featured row gy-3 gx-md-3 gx-3 justify-content-center">
        {loading || data.length === 0 ? (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            <div className="col-md-6 col-lg-3 col-6">
              <div
                className="featuredItem"

                onClick={() => {
                  navigate("/hotels", {
                    state: { destination: "Helsinki"  },
                  });
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1557261651-a6beab93541f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="featuredImg img-fluid"
                />
                <div className="featuredTitles">
                  <h1>Helsinki</h1>
                  <h2>{data[0]} ominaisuuksia</h2>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-6">
              <div
                className="featuredItem"
                onClick={() => {
                  navigate("/hotels", {
                    state: { destination: "Marrakech" },
                  });
                }}
              >
                <img
                  src="https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="featuredImg img-fluid"
                />
                <div className="featuredTitles">
                  <h1>Morokko</h1>
                  <h2>{data[1]} ominaisuuksia</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-6">
              <div
                className="featuredItem"
                onClick={() => {
                  navigate("/hotels", {
                    state: { destination: "Tallinna" },
                  });
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1561449306-42d9b4bd16c7?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="featuredImg img-fluid"
                />
                <div className="featuredTitles">
                  <h1>Tallinna</h1>
                  <h2>{data[2]} ominaisuuksia</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-6">
              <div
                className="featuredItem"
                onClick={() => {
                  navigate("/hotels", {
                    state: { destination: "Puerto Viejo" },
                  });
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552980870-139c7b393f0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="featuredImg img-fluid"
                />
                <div className="featuredTitles">
                  <h1>Costa Rica</h1>
                  <h2>{data[3]} ominaisuuksia</h2>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Featured;
