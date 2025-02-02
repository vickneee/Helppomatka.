import useFetch from "../../services/useFetch";
import "./featuredProperties.css";
import FeaturedItem from "./FeaturedItem";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "https://helppomatka.onrender.com/api/hotels?featured=true"
  );

  return (

    <div className="res container">
      <h1 className="homeTitle homeTitle-1 mb-4">Vieraiden rakastamia paikkoja</h1>

      <div className="fp row gy-4">
        {loading || data.length === 0 ? (
          <div className="lds-roller mx-auto">
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
