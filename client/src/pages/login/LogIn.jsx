import React, { useState } from "react";
import "./logIn.css"

const LogIn = () => {
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2 className="logInTitle">Kirjaudu sisään</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="text">Käyttäjänimi</label>
                <input value={uname} onChange={(e) => setUname(e.target.value)} type="text"
                       placeholder="Käyttäjännimi" id="uname" name="uname"/>
                <label htmlFor="email">Sähköpostiositteesi</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                       placeholder="sahkopostiosoteesi@gmail.com" id="email" name="email"/>
                <label htmlFor="password">Salasana</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********"
                       id="password" name="password"/>
                <button type="submit">Kirjaudu sisään</button>
            </form>
        </div>
    )
}

export default LogIn;
