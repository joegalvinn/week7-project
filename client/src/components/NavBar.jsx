import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/add-exercise">Add Exercise</Link> |{" "}
      <Link to="/exercise-log">Log</Link>
    </nav>
  );
}
