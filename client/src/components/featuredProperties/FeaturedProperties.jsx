import useFetch from "../../services/useFetch";
import "./featuredProperties.css";
import FeaturedItem from "./FeaturedItem";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "http://localhost:8800/api/hotels?featured=true"
  );

  return (

    <div className="res container">
      <h1 className="homeTitle mb-4">Vieraiden rakastamia paikkoja</h1>

      <div className="fp row gy-4">
        {loading || data.length === 0 ? (
          <div className="lds-roller mx-auto">
            {/*<div></div>*/}
            {/*<div></div>*/}
            {/*<div></div>*/}
            {/*<div></div>*/}
            {/*<div></div>*/}
            {/*<div></div>*/}
            {/*<div></div>*/}
            {/*<div></div>*/}
          </div>
        ) : (
          <>
            {data.map((item) => (
              <div className="col-md-6 col-lg-3">
                <FeaturedItem key={item._id} item={item} />
              </div>
            ))}
          </>
        )}
    </div>

    </div>
  );
};

export default FeaturedProperties;
