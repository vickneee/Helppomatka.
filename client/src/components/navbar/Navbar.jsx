import './navbar.css'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" className='logo' href="">Helppomatka.fi</Link>
                <div className="navItems">
                    {location.pathname !== "/" && (
                        <Link to="/register" className="navButtonRegister">Rekisteröidy</Link>
                    )}
                    {/*<Link to="/register" className="navButtonRegister">Rekisteröidy</Link>*/}
                    <Link to="/login" className="navButton">Kirjaudu sisään</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
