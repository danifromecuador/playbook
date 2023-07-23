import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navContainer">
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
        <div className="img">👤</div>
      </nav>
    </div>
  );
};

export default Navbar;