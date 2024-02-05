import './navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
            <div className="navContainer">
                <a className='logo' href="">Helppomatka.fi</a>
                <div className="navItems">
                    <Link to="/login" className="navButton">Kirjautuminen</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
