import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/674838.jpg?k=3cf9d13f65ebbe9e5b1e7329c37ddc26b82114285b035ba547e9826a72245b29&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Helsinki </h1>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/674831.jpg?k=1ac4b9c1f283a4ad1572357388f292999e4f912578fc8a81ca2b28eb6d7052ae&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tampere</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/687752.jpg?k=3e6ad26db50adc1b3d34bf2deba9e9e06b92e37a0cdc11afd340ffb3a89a36a5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tallin</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
