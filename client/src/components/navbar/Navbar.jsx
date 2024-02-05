import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" className='logo' href="">Helppomatka.fi</Link>
                <div className="navItems">
                    <Link to="/register" className="navButtonRegister">Rekisteröidy</Link>
                    <Link to="/login" className="navButton">Kirjaudu sisään</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
