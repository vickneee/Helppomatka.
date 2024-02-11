import React, {useState} from "react";
import "./logIn.css"
import Navbar from "../../components/navbar/Navbar.jsx";

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div>
            <div className="custom-header-main">
                <div className="custom-header">
                    <Navbar/>
                </div>
            </div>
            <div className="auth-form-container">
                <h2 className="logInTitle">Kirjaudu sisään</h2>
                <div className="auth-form-container-2">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="email">Sähköpostiositteesi</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                               placeholder="sahkopostiosoteesi@gmail.com" id="email" name="email"/>
                        <label htmlFor="password">Salasana</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password"
                               placeholder="salasana"
                               id="password" name="password"/>
                        <button className="logInBtn" type="submit">Kirjaudu sisään</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn;
