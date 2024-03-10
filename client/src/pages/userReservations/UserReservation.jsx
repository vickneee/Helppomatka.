import React, {useEffect, useState} from "react";
// import {useNavigate} from "react-router-dom";
// import {useContext} from "react";
// import {SearchContext} from "../../context/SearchContext";
import axios from "axios";
import "./userReservations.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {format} from "date-fns";

const UserReservations = () => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    // const navigate = useNavigate();
    // const {dispatch} = useContext(SearchContext);
    // const [destination, setDestination] = useState("");
    // const [dates, setDates] = useState([
    //     {
    //         startDate: new Date(),
    //         endDate: new Date(),
    //         key: "selection",
    //     },
    // ]);
    // const [options, setOptions] = useState({
    //     adult: 1,
    //     children: 0,
    //     room: 1,
    // });

    useEffect(() => {
        const fetchReservations = async () => {
            setLoading(true);
            try {
                const resReservations = await axios.get(
                    "https://helppomatka.onrender.com/api/reservations/myreservations"
                );
                const reservationsWithHotelDetails = await Promise.all(
                    resReservations.data.map(async (reservation) => {
                        const resHotel = await axios.get(
                            `https://helppomatka.onrender.com/api/hotels/find/${reservation.hotelId}`
                        );

                        const images = resHotel.data.photos.map((photoUrl) => ({
                            original: photoUrl,
                        }));
                        return {
                            ...reservation,
                            hotelDetails: resHotel.data,
                            images,
                        };
                    })
                );
                setReservations(reservationsWithHotelDetails);
            } catch (error) {
                console.error("Error fetching reservations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReservations();
    }, []);

    if (loading) {
        return (
            <div>
                <Header type="reservations"/>
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
            </div>
        );
    }
    if (reservations.length === 0) {
        return (
            <div>
                <Header type="no-reservations"/>
            </div>
        );
    }
    return (
        <div>
            <Header type="reservations"/>
            {reservations.map((reservation) => {
                // Convertir y formatear las fechas aquí
                const checkInDate = format(
                    new Date(reservation.checkInDate),
                    "dd.MM.yyyy"
                );
                const checkOutDate = format(
                    new Date(reservation.checkOutDate),
                    "dd.MM.yyyy"
                );
                const checkInFormatted = `${checkInDate} 15.00 hrs`;
                const checkOutFormatted = `${checkOutDate} 12.00 hrs`;

                return (
                    <div key={reservation._id} className="RItem">
                        <div className="box">
                            <div className="reservationContent">
                                <h1 className="hotelTitle">{reservation.hotelDetails.name}</h1>
                                <div className="hotelAddress">
                                    <span>{reservation.hotelDetails.address}</span>
                                </div>
                                <div className="hotelPriceHighlight">
                                    Varausnumero: {reservation.reservationNumber}
                                </div>
                            </div>
                            <div>
                                <p className="hotelInfo">Check in: {checkInFormatted}</p>
                                <p className="hotelInfo">Check out: {checkOutFormatted}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
            <Footer/>
        </div>
    );
};
export default UserReservations;
