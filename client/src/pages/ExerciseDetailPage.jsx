import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ExerciseDetailPage.css";

export function ExerciseDetailPage() {
  const { id } = useParams();
  const [exercise, setExercises] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchExercise() {
      try {
        const response = await fetch(
          `https://week7-project-qkny.onrender.com/exercise-log-detailed/${id}`
          // http://localhost:8080/exercise-log-detailed/${id}
        );
        const data = await response.json();
        if (response.ok) {
          setExercises(data);
        } else {
          console.error("exercise not found");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching exercise details", error);
        setLoading(false);
      }
    }
    fetchExercise();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this exercise?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `https://week7-project-qkny.onrender.com/exercise-log/${id}`,
        {
          // http://localhost:8080/exercise-log/${id}
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Exercise deleted successfully!");
        navigate("/exercise-log");
      } else {
        console.error("Failed to delete the exercise");
      }
    } catch (error) {
      console.error("Error deleting he exercise", error);
    }
  };

  if (loading) {
    return <p>Loading your exercises details...</p>;
  }

  if (!exercise) {
    return <p>No exercise found!</p>;
  }

  return (
    <section className="body">
      <div className="exerciseCard">
        <p>
          <b>Name:</b> {exercise.exercise_name}
        </p>
        <p>
          <b>Group:</b> {exercise.exercise_group}
        </p>
        <p>
          <b>Date:</b> {new Date(exercise.exercise_date).toLocaleDateString()}
        </p>
        <p>
          <b>Weight:</b> {exercise.weight_kg}
        </p>
        <p>
          <b>Sets:</b> {exercise.sets}
        </p>
        <p>
          <b>Reps:</b> {exercise.reps}
        </p>
        <p>
          <b>Notes:</b> {exercise.notes}
        </p>
        <p>
          <b>Comments:</b> {exercise.exercise_text || "No Comments"}
        </p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </section>
  );
}
