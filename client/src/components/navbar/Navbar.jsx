import "./navbar.css";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import {useState} from "react";
import {ToastContainer, toast} from "react-toastify";

const Navbar = () => {
    const {user} = useContext(AuthContext);
    const [navbar, setNavbar] = useState(false);

    const notify = () => {
        toast.success("Logged out");
    };

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    return (
        <>
            <nav
                className={
                    navbar
                        ? "navbar active fixed-top navbar-expand-lg navbar-light bg-light"
                        : "navbar fixed-top navbar-expand-lg navbar-light bg-light"
                }
            >
                <ToastContainer autoClose={800}/>

                <div className="container navbar-container">
                    <Link className="navbar-brand" to="/">
                        Helppomatka
                    </Link>
                    <button
                        className="navbar-toggler d-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo01"
                    ></div>
                    <div className="navbar-container">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {user && (
                                <>
                                    <li className="nav-item me-3">
                                        <Link to="/reservations/myreservations"
                                              className="nav-link btn px-3 btn-md login-btn mb-2">
                                            Omat varaukset
                                        </Link>
                                    </li>
                                    <li
                                        className="nav-item me-3"
                                        onClick={() => {
                                            notify();
                                            setTimeout(() => {
                                                window.location.reload();
                                            }, 800);
                                            localStorage.setItem("user", null);
                                        }}
                                    >
                                        <Link
                                            to="/"
                                            className="nav-link login-btn btn px-3 align-items-center"
                                        >
                                            <i className="userBtn bx bx-power-off me-1"></i> {user.username}
                                        </Link>
                                    </li>
                                </>
                            )}
                            {!user && (
                                <Link to="/login" className="nav-item me-3">
                                    <Link className="nav-link btn px-3 btn-md login-btn" to="/login">
                                        Kirjaudu sisään <i className="bx bx-log-in-circle"></i>
                                    </Link>
                                </Link>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
        ;
};

export default Navbar;
