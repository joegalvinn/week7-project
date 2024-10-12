//import packages
//my imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

//initialise express
const app = express();

//tell express to use json
app.use(express.json());

//tell express to use cors
app.use(cors());

//configure dotenv file
dotenv.config();

//set up our db using the connection string from supabase and the pg package
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({ connectionString: dbConnectionString });

//set up a PORT for our server to listen to
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`running on PORT ${PORT}`);
});

//write an endpoint for our root route
app.get("/", (req, res) => {
  res.json({ message: "i am rou..oote" });
});

//my end points
//minimum - i need an endpoint to READ data from db --> SQL query to get data
app.post("/add-exercise", async (req, res) => {
  try {
    const {
      exercise_name,
      exercise_group,
      exercise_date,
      weight_kg,
      sets,
      reps,
      notes,
    } = req.body;
    const exerciseInput = await db.query(
      `
            INSERT INTO exercise_log (exercise_name, exercise_group, exercise_date, weight_kg, sets, reps, notes)
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
            `,
      [
        exercise_name,
        exercise_group,
        exercise_date,
        weight_kg,
        sets,
        reps,
        notes,
      ]
    );
    res.status(200).json(exerciseInput.rows[0]);
  } catch (error) {
    console.error("Error adding exercise", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

//i need an endpoint to CREATE data in the db --> SQL query to add the data. The data here is stored in the body, so we will add the body data to the db
app.get("/exercise-log", async (req, res) => {
  try {
    const exerciseData = await db.query(
      `SELECT id, exercise_name, exercise_group, exercise_date, weight_kg FROM exercise_log`
    );
    console.log(exerciseData);
    res.status(200).json(exerciseData.rows);
  } catch (error) {
    console.error("This data can't be found", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get("/exercise-log-detailed", async (req, res) => {
  try {
    const exerciseData = await db.query(
      `SELECT exercise_log.id, exercise_name, exercise_group, exercise_date, weight_kg, sets, reps, notes, comments.comment_text FROM exercise_log
      LEFT JOIN comments ON comments.exercise_id = exercise_log.id`
    );
    console.log(exerciseData);
    res.status(200).json(exerciseData.rows);
  } catch (error) {
    console.error("This data can't be found", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

//STRETCH GOALS
// an endpoint for deleting data --> we need params

//SUPER MEGA STRETCH GOAL
//an endpoint to update the data
