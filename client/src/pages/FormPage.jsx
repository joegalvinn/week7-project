import React, { useState } from "react";

export function FormPage() {
  const [formData, setFormData] = useState({
    exercise_name: "",
    exercise_group: "",
    exercise_date: "",
    weight_kg: "",
    sets: "",
    reps: "",
    notes: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/add-exercise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          exercise_name: "",
          exercise_group: "",
          exercise_date: "",
          weight_kg: "",
          sets: "",
          reps: "",
          notes: "",
        });
        alert("Exercise added successfully!");
      } else {
        alert("Error adding ecercise. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Add a New Exercise</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="exercise_name">Exercise Name:</label>
          <input
            type="text"
            id="exercise_name"
            name="exercise_name"
            value={formData.exercise_name}
            onChange={handleChange}
            placeholder="E.g. Barbell BenchPress "
            required
          />
        </div>

        <div>
          <label htmlFor="exercise_group">Exercise Group:</label>
          <input
            type="text"
            id="exercise_group"
            name="exercise_group"
            value={formData.exercise_group}
            onChange={handleChange}
            placeholder="E.g. Chest "
            required
          />
        </div>

        <div>
          <label htmlFor="exercise_date">Exercise Date:</label>
          <input
            type="date"
            id="exercise_date"
            name="exercise_date"
            value={formData.exercise_date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="weight_kg">Weight (kg):</label>
          <input
            type="number"
            id="weight_kg"
            name="weight_kg"
            value={formData.weight_kg}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="sets">Sets :</label>
          <input
            type="number"
            id="sets"
            name="sets"
            value={formData.sets}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="reps">Reps :</label>
          <input
            type="number"
            id="reps"
            name="reps"
            value={formData.reps}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="notes">Notes :</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add Exercise</button>
      </form>
    </div>
  );
}
