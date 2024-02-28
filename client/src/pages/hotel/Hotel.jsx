import "./hotel.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {useContext, useState} from "react";
import useFetch from "../../services/useFetch";
import {useLocation, useNavigate} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext";
import {AuthContext} from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/scss/image-gallery.scss';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const Hotel = () => {

    const labels = {
        1: "Hyödytön+",
        2: "Huono+",
        3: "Hyvä",
        4: "Vaikuttava",
        5: "Erinomainen+",
    };

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
    }

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [openModal, setOpenModal] = useState(false);

    const {images, data, loading} = useFetch(
        `http://localhost:8800/api/hotels/find/${id}`
    );

    const value = data.rating
    const [hover, setHover] = useState(-1);

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const {dates, options} = useContext(SearchContext);

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
        return Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    }

    const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate);

    const notify = () => {
        toast.warning("Not authenticated, Redirecting to login page");
    };

    const delay = () => {
        navigate("/login");
    };

    const handleClick = () => {
        if (user) {
            setOpenModal(true);
        } else {
            notify();
            setTimeout(delay, 1500);
        }
    };
    return (
        <div>
            <ToastContainer autoClose={3000}/>

            <Header type="list"/>

            <div className="hotelContainer container">
                {loading || data.length === 0 ? (
                    <div className="d-flex justify-content-center">
                        <div className="lds-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                ) : (
                    <div className="hotelWrapper">
                        <div className="d-md-flex d-block justify-content-md-between">
                            <div>
                                <h1 className="hotelTitle">{data.name}</h1>
                                <div className="hotelAddress">
                                    <FontAwesomeIcon icon={faLocationDot}/>
                                    <span>{data.address}</span>
                                </div>
                                <div className="hotelDistance">
                                    Erinomainen sijainti – {data.distance}m keskustasta
                                </div>
                                <div className="hotelPriceHighlight">
                                    Varaa yli {data.cheapestPrice}€ yöpyminen tässä kiinteistössä ja
                                    hanki ilmainen lentokenttätaksi
                                </div>
                            </div>

                            <div>
                                <Box
                                    sx={{
                                        width: 200,
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Rating
                                        name="hover-feedback"
                                        value={value}
                                        precision={0.5}
                                        getLabelText={getLabelText}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        emptyIcon={
                                            <StarIcon style={{opacity: 0.55}} fontSize="inherit"/>
                                        }
                                        readOnly
                                    />
                                    {value !== null && (
                                        <Box sx={{ml: 2}}>
                                            {labels[hover !== -1 ? hover : value]}
                                        </Box>
                                    )}
                                </Box>
                            </div>
                        </div>

                        <div className="row mt-5 gy-5">
                            <div className="col-lg-8">
                                <ImageGallery items={images}/>

                            </div>

                            <div className="col-lg-4">
                                <div className="hotelDetailsTexts">
                                    <h1 className="hotelTitle">{data.title}</h1>
                                    <p className="hotelDesc">{data.desc}</p>
                                </div>

                                <div className="hotelDetails mt-5">
                                    <div className="hotelDetailsPrice">
                                        <h1>Sopii täydellisesti {days}-yön oleskeluun!</h1>
                                        <span>Sijaitsee todellisessa sydämessä {data.city}, tämä kiinteistö
                      saa erinomaisen sijaintipistemäärän {data.rating}
                    </span>
                                        <h2>
                                            <b>{days * data.cheapestPrice * options.room}€</b> ({days}{" "}
                                            yötä)
                                        </h2>
                                        <button onClick={handleClick}>Varaa nyt!</button>
                                    </div>
                                </div>

                                <p className="hotelInfo">
                                    Huonevaraukset ovat oletuksena 2 yötä, voit muuttaa sitä tutkiessasi
                                    tai hakemassa.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
            <Footer/>
        </div>
    );
};

export default Hotel;
