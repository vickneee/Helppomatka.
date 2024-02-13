import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="">
      <footer class="py-3">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <Link to="/" class="nav-link px-2">
              Etusivu
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/" href="#" class="nav-link px-2">
              Asunnot
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/" class="nav-link px-2">
              Hotellit
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/" class="nav-link px-2">
              Mökkit
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/" class="nav-link px-2">
              Huvilat
            </Link>
          </li>
        </ul>
        <p class="text-center company-name text-muted">&copy; 2024 Helppomatka</p>
      </footer>
    </div>
  );
};

export default Footer;
