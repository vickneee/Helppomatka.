import './navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
       <a className='logo' href="">Helppomatka.fi</a>
        <div className="navItems">
          <button className="navButton">Kirjautuminen</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
