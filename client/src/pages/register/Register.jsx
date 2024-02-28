import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./../../pages/register/register.css"

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {username, email, password, confirmPassword} = formData;

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8800/api/users/register", {
                username,
                email,
                password,
            });
            toast.success(response.data.message);
            navigate("/login");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="vh-100 login-mdb">
            <Navbar/>
            <ToastContainer autoClose={2000}/>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center vh-100 ">
                    <div className="card card-mbd vw-100">
                            <span className="registerTitle h1 fw-bold pt-4 mb-4">Rekisteröidy</span>
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
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
