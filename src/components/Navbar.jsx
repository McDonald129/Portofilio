import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-right">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/projects">Projects</Link></li>
          <li className="nav-item"><Link to="/skills">Skills</Link></li>
        </ul>
        <div className="nav-contact-button">
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    </nav>
  );
}
