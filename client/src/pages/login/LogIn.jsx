import axios from "axios";
import { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../../pages/login/logIn.css"
import Navbar from "../../components/navbar/Navbar.jsx";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username:"",
        password:"",
    });
    const { user, loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const notify = () => {
        toast.success("Logged in succesfully");
    };



    useEffect(()=>{
        if (error) {
            toast.error("Incorrect username or password");
        }
    },[error])


    const delay = () => {
        navigate(-1);
    };
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post(
                "http://localhost:8800/api/auth/login",
                credentials
            );
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            localStorage.setItem("user", res.data.details);
            notify();
            setTimeout(delay, 2000);
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };

    console.log(user)

    return (
        <section className="vh-100 login-mdb">
            <Navbar/>
            <ToastContainer autoClose={2000} />
            <div className="container py-5 vh-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card card-mbd">
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-6 d-none d-md-block">
                                    <img
                                        src="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="login form"
                                        className="img-fluid img-mdb"
                                    />
                                </div>
                                <div className="col-md-6 col-lg-6 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <span className="h1 fw-bold mb-0">Helppomatka</span>
                                            </div>

                                            <h5 className="fw-normal headersign mb-3 pb-3">
                                                Kirjaudu tilillesi
                                            </h5>

                                            <div className="mb-3">
                                                <label form="username" className="form-label">
                                                    Käyttäjätunnus
                                                </label>
                                                <input
                                                    value={credentials.username}
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    id="username"
                                                    onChange={handleChange}
                                                    placeholder="Käyttäjätunnus"
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label form="passowrd" className="form-label">
                                                    Salasana
                                                </label>
                                                <input
                                                    value={credentials.password}
                                                    type="password"
                                                    className="form-control form-control-lg"
                                                    id="password"
                                                    onChange={handleChange}
                                                    placeholder="Salasana"
                                                />
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button
                                                    className="lbtn btn-lg btn-block"
                                                    disabled={loading}
                                                    onClick={handleClick}
                                                    type="button"
                                                >
                                                    {/*{loading && (*/}
                                                    {/*    <div*/}
                                                    {/*        className="spinner-grow me-2 spinner-grow-sm text-light"*/}
                                                    {/*        role="status"*/}
                                                    {/*    >*/}
                                                    {/*        <span className="visually-hidden">Ladataan...</span>*/}
                                                    {/*    </div>*/}
                                                    {/*)}*/}
                                                    Kirjaudu sisään
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
