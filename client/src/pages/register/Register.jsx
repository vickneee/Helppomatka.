import React, {useContext, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./../../pages/register/register.css"

// User Registration
const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // AuthContext Authentication
    const {user, loading, error, dispatch} = useContext(AuthContext);

    // Navigation
    const navigate = useNavigate();

    // Handling changes
    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Notifying if registration was Successful
    const notify = () => {
        toast.success("Registration successful!");
    };

    // Delay time & Navigation
    const delay = () => {
        navigate("/login");
    };

    // User Submit for Regisration
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {username, email, password, confirmPassword} = formData;

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        try {
            const response = await axios.post("http://localhost:8800/api/auth/register", {
                username,
                email,
                password,
            });
            dispatch({type: "LOGIN_SUCCESS", payload: response.data.details});
            notify();
            setTimeout(delay, 2000);
        } catch (error) {
            toast.error("Registration unsuccssesful!");
        }
    };

    return (
        <div className="vh-100 login-mdb">
            <Navbar/>
            <ToastContainer autoClose={2000}/>
            <div className="container p-1 py-5">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="card card-2 card-mbd p-5">
                            <span className="registerTitle h1 fw-bold mb-4">Rekisteröidy</span>
                            <form className="register-form" onSubmit={handleSubmit}>
                                <label className="mb-2" htmlFor="username">Käyttäjänimi</label>
                                <input
                                    value={formData.username}
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control form-control-lg mb-2"
                                    placeholder="Käyttäjänimi"
                                    id="username"
                                    name="username"
                                />
                                <label className="mb-2" htmlFor="email">Sähköpostiosoite</label>
                                <input
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    className="form-control form-control-lg mb-2"
                                    placeholder="Sähköpostiosoite"
                                    id="email"
                                    name="email"
                                />
                                <label className="mb-2" htmlFor="password">Salasana</label>
                                <input
                                    value={formData.password}
                                    onChange={handleChange}
                                    type="password"
                                    className="form-control form-control-lg mb-2"
                                    placeholder="Salasana"
                                    id="password"
                                    name="password"
                                />
                                <label className="mb-2" htmlFor="confirmPassword">Vahvista salasana</label>
                                <input
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    type="password"
                                    className="form-control form-control-lg mb-2"
                                    placeholder="Vahvista salasana"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                />
                                <div className="pt-1 mb-4">
                                    <button className="logInBtn lbtn btn-lg btn-block" type="submit">
                                        Rekisteröidy
                                    </button>
                                </div>
                                <p className="">Tai kirjaudu sisään <span><a href="/login"
                                                                                target="_blank">tästä linkistä</a></span>
                                </p>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
