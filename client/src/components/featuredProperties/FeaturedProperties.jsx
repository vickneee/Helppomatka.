import "./featuredProperties.css";
import HelsinkiImage from "./image/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg"
import TallinnaImage from "./image/jason-briscoe-UV81E0oXXWQ-unsplash.jpg"
import CostaRicaImage from "./image/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg"
import MaroccoImage from "./image/maria-orlova-6viJObrmnBw-unsplash.jpg"


const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src={HelsinkiImage}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Huoneisto Star Mio</span>
        <span className="fpCity">Helsinki</span>
        <span className="fpPrice">Alkaen 120.00 €</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Erinomainen</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={TallinnaImage}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Sviiti Lentoasemalla</span>
        <span className="fpCity">Tallinna</span>
        <span className="fpPrice">Alkaen 150.00 €</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Poikkeuksellinen</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={CostaRicaImage}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Sesonki Huoneisto</span>
        <span className="fpCity">Costa Rica</span>
        <span className="fpPrice">Alkaen 99.00 €</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Erinomainen</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={MaroccoImage}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Riad de Lavi - Paratiisi</span>
        <span className="fpCity">Morocco</span>
        <span className="fpPrice">Alkaen 105.00 €</span>
        <div className="fpRating">
          <button>9.4</button>
          <span>Erinomainen</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
