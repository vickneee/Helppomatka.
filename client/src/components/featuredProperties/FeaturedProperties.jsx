import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Helsinki</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Tallin</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">Costa Rica</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/410113664.jpg?k=b3e8da129320573f38ecabf2be8da749f545e92267ecd38601f233e921913867&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Riad de l'Olivier - Paradise Valley</span>
        <span className="fpCity">Morocco</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>9.4</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
