import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ darkMode }) {
  return (
    <nav className={`nav ${darkMode ? "darkmode" : ""}`}>
      <NavLink exact className="navItem" to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink className="navItem" to="/add-exercise" activeClassName="active">
        Add Exercise
      </NavLink>
      <NavLink className="navItem" to="/exercise-log" activeClassName="active">
        Log
      </NavLink>
    </nav>
  );
}
