import './navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" className='logo'>Helppomatka.fi</Link>
                <div className="navItems">
                    <button className="navButton">Kirjautuminen</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
