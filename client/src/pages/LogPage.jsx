//here I will fetch the posts from the server (get endpoint), which is getting the posts from the db
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LogPage.css";

export function LogPage() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortORder] = useState("asc");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://week7-project-server.onrender.com/exercise-log?sort=${sortOrder}`
          // `http://localhost:8080/exercise-log?sort=${sortOrder}`
        );
        const data = await response.json();
        setExercises(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exercises", error);
      }
    }
    fetchData();
  }, [sortOrder]);
  //we need useState to save the fetched data
  //we need useEffect to fetch the data
  //useEffect()
  //we need a function to fetchData(){
  //fetch("url")
  //parse the data into json
  //console log your dat, so you can see what it looks like
  //you might have to wrangle data, depending on what your data looks like
  //set your state variable to be the fetched data
  //setState(fetchedData)
  //!Once you have finished your app and your deployment is ready, replace your local host urls with the Render urls
  // }

  const handleSortByDate = () => {
    setSortORder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  const handleRowClick = (id) => {
    navigate(`/exercise-log/${id}`);
  };

  return (
    <>
      {/* I need to render my posts in here */}
      {/* A suggestion: use some conditional rendering in here too (if you want) */}
      {loading ? (
        <p>Loading your exercises...</p>
      ) : (
        <div className="tableContainer">
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Exercise Name</th>
                <th>Exercise Group</th>
                <th onClick={handleSortByDate} style={{ cursor: "pointer" }}>
                  Exercise Date {sortOrder === "asc" ? "↑" : "↓"}
                </th>
                <th>Weight (kg)</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercise) => (
                <tr
                  key={exercise.id}
                  onClick={() => handleRowClick(exercise.id)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{exercise.exercise_name}</td>
                  <td>{exercise.exercise_group}</td>
                  <td>
                    {new Date(exercise.exercise_date).toLocaleDateString()}
                  </td>
                  <td>{exercise.weight_kg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
