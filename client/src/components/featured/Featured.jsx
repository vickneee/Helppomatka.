import "./featured.css";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();
  return (
    <div className="featured">
      <div className="featuredItem"
                        onClick={() => {
                          navigate("/hotels", {
                            state: { destination: "helsinki" },
                          });
                        }}
      >
        <img
          src="https://images.unsplash.com/photo-1557261651-a6beab93541f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Helsinki</h1>
        </div>
      </div>

      <div className="featuredItem"
       onClick={() => {
        navigate("/hotels", {
          state: { destination: "berlin" },
        });
      }}
      >
        <img
          src="https://images.unsplash.com/photo-1540224485413-4c7939106f3a?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Berlin</h1>
        </div>
      </div>
      <div className="featuredItem"  onClick={() => {
          navigate("/hotels", {
          state: { destination: "tallinn" },
        });
       }}
       >
        <img
          src="https://images.unsplash.com/photo-1561449306-42d9b4bd16c7?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tallinn</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
