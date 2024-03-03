import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import "./user_reservations.css";
import video from "../../components/header/image/hotel-video.mp4";

const UserReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const { dispatch } = useContext(SearchContext);
  useEffect(() => {
    const fetchReservations = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/reservations/myreservations", {
          /* Configuración del token de autenticación si es necesario */
        });
        setReservations(response.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
        setLoading(false);
      } finally {
        setLoading(false);
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading) {
    return (
      <div className="no-reservations">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content-overlay">
          <p>Ei varauksia vielä. Tee uusi varaus nyt!</p>
          <button
            onClick={() => {
              dispatch({
                type: "NEW_SEARCH",
                payload: { destination, dates, options },
              });
              navigate("/hotels", { state: { destination, dates, options } });
            }}
          >
            Tee varaus
          </button>
        </div>
      </div>
    );
  }

  return <div>{/* Renderiza las reservas aquí */}</div>;
};

export default UserReservations;
