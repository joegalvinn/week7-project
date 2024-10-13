import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ darkMode }) {
  return (
    <nav className={`nav ${darkMode ? "darkmode" : ""}`}>
      <Link className="navItem" to="/">
        Home
      </Link>
      <Link className="navItem" to="/add-exercise">
        Add Exercise
      </Link>
      <Link className="navItem" to="/exercise-log">
        Log
      </Link>
    </nav>
  );
}
