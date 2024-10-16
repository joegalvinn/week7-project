import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ darkMode }) {
  return (
    <nav className={`nav ${darkMode ? "darkmode" : ""}`}>
      <Link className="navItem home-link" to="/">
        Home
      </Link>
      <Link className="navItem add-exercise-link" to="/add-exercise">
        Add Exercise
      </Link>
      <Link className="navItem log-link" to="/exercise-log">
        Log
      </Link>
    </nav>
  );
}
