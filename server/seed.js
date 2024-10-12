//in this file you can have SQL queries to crete your table and insert seed data
//if you have done this step in the SQL editor on supabase, please add your queries below for us to see
db.query(`CREATE TABLE IF NOT EXISTS exercise_log (
    id SERIAL PRIMARY KEY,
    exercise_name VARCHAR(255),
    exercise_group VARCHAR(255),
    exercise_date DATE,
    weight_kg DECIMAL(5, 2),
    sets INTEGER,
    reps INTEGER,
    notes TEXT,
    created_at TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0)
  );`);

db.query(` CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    exercise_id INTEGER REFERENCES exercise_log(id),
    comment_text TEXT,
    commenter_name VARCHAR(255),
    created_at TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),
    FOREIGN KEY (exercise_id) REFERENCES exercise_log(id) ON DELETE CASCADE
  );`);

db.query(`  INSERT INTO exercise_log (exercise_name, exercise_group, exercise_date, weight_kg, sets, reps, notes)
VALUES ('Bench Press', 'Chest', '2024-10-11', 100, 4, 10, 'Felt strong, could go heavier next time');`);

db.query(`INSERT INTO comments (exercise_id, comment_text, commenter_name)
VALUES (1, 'Great job! You can definitely increase the weight next time!', 'John Doe');`);
