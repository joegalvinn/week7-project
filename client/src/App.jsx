//App should be our parent top-level component
//my advice is that you set up your routes in App
import { HomePage } from "./pages/HomePage";
import { FormPage } from "./pages/FormPage";
import { LogPage } from "./pages/LogPage";
import { ExerciseDetailPage } from "./pages/ExerciseDetailPage";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="App">
      <button className="darkModeButton" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="imports">
        <Header className="header" />
        <NavBar darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-exercise" element={<FormPage />} />
          <Route path="/exercise-log" element={<LogPage />} />
          <Route path="/exercise-log/:id" element={<ExerciseDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}
