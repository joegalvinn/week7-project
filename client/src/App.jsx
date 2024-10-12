//App should be our parent top-level component
//my advice is that you set up your routes in App
import { HomePage } from "./pages/HomePage";
import { FormPage } from "./pages/FormPage";
import { LogPage } from "./pages/LogPage";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-exercise" element={<FormPage />} />
        <Route path="/exercise-log" element={<LogPage />} />
      </Routes>
    </div>
  );
}
