from fastapi import FastAPI, status, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import time
import psycopg2
from psycopg2.extras import RealDictCursor

app = FastAPI()

while True:
    try:
        conn = psycopg2.connect(host='dpg-chdueaak728nf3m74c10-a.oregon-postgres.render.com', database='workout_crud', user='root', password='4vCvzua06RTVJpCKbPnbq0c5bIG0Ahc2',
                                cursor_factory=RealDictCursor)
        cursor = conn.cursor()
        print("Database connection was successfull!")
        break
    except Exception as error:
        print("Connecting to database failed")
        print("Error:", error)
        time.sleep(60)


class Workout(BaseModel):
    name: str
    description: str


class Exercise(BaseModel):
    workout_name: str
    exercise: str
    reps: int
    sets: int


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# mydb = mysql.connector.connect(user='sql9617151', password='G9hf1EmwVx',
#                                host='sql9.freemysqlhosting.net', database='sql9617151')

# if mydb.is_connected():
#     print(mydb)
#     print('Connection Established')

# cursor = mydb.cursor(dictionary=True)

# cursor.execute('SET GLOBAL connect_timeout=288000000')
# cursor.execute('SET GLOBAL interactive_timeout=28800000')
# cursor.execute('SET GLOBAL wait_timeout=28800000')

# mydb.commit()


@app.get('/')
def root():
    return {"message": "Hello World"}


@app.get('/myworkouts')  # Get all workout sheets
def get_all_workouts():
    conn.rollback()
    cursor.execute("SELECT * FROM workout_crud.workout_sheet")
    workoutList = cursor.fetchall()
    return workoutList


@app.get('/myworkouts/{id}')  # Get all workout sheets
def get_workout(id: int):
    conn.rollback()
    cursor.execute(
        "SELECT exercise, reps, sets FROM workout_crud.workout_with_exercises WHERE id = %s", [str(id)])
    workoutList = cursor.fetchall()
    if not workoutList:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Workout does not exist")
    return workoutList


@app.delete("/myworkouts/{id}")  # Delete workout by id
def delete_workout(id: int):
    conn.rollback()
    cursor.execute(
        "SELECT * from workout_crud.workout_sheet WHERE id = %s", [str(id)])
    workoutList = cursor.fetchall()
    if not workoutList:
        raise HTTPException(status_code=404, detail="Workout not found")
    cursor.execute(
        "DELETE FROM workout_crud.workout_exercise WHERE workout_id = %s", [str(id)])
    cursor.execute(
        "DELETE FROM workout_crud.workout_sheet WHERE id = %s", [str(id)])
    conn.commit()
    return {"ok": True}


@app.post("/myworkouts", status_code=status.HTTP_201_CREATED)
def create_workout(workout: Workout):
    conn.rollback()
    cursor.execute("""INSERT INTO workout_crud.workout_sheet (name, description) VALUES (%s, %s) """,
                   (workout.name, workout.description))
    cursor.execute(
        """ SELECT * FROM workout_crud.workout_sheet WHERE name = %s""", [workout.name])
    workoutList = cursor.fetchone()
    conn.commit()
    if workoutList:
        return workoutList


@app.post("/myworkouts/exercises", status_code=status.HTTP_201_CREATED)
def create_exercises(exercises: List[Exercise]):
    conn.rollback()
    cursor.execute("SELECT id FROM workout_crud.workout_sheet WHERE name = %s", [
                   exercises[0].workout_name])
    id = cursor.fetchone()['id']

    for exercise in exercises:
        cursor.execute("""INSERT INTO workout_crud.workout_exercise (workout_id, exercise, reps, sets) VALUES (%s, %s, %s, %s) """,
                       (id, exercise.exercise, exercise.reps, exercise.sets))
        cursor.execute(
            """ SELECT exercise FROM workout_crud.workout_exercise WHERE exercise = %s""", [exercise.exercise])
        workoutList = cursor.fetchall()
        conn.commit()
        if not workoutList:
            return {'message': 'exercise not created'}
    return {'message': 'all worked out'}


@app.put("/myworkouts/{id}", status_code=status.HTTP_201_CREATED)
def update_workout(id: int, workout: Workout):
    conn.rollback()
    # check if workout exists
    cursor.execute(
        "SELECT * from workout_crud.workout_sheet WHERE id = %s", [str(id)])
    workoutList = cursor.fetchall()
    if not workoutList:
        raise HTTPException(status_code=404, detail="Workout not found")

    # update workout info
    cursor.execute(
        "UPDATE workout_crud.workout_sheet SET name = %s, description = %s WHERE id = %s", [workout.name, workout.description, str(id)])

    conn.commit()
    return {"ok": True}


@app.put("/myworkouts/exercises/{id}")
def update_exercises(id: int, exercises: List[Exercise]):
    conn.rollback()
    cursor.execute(
        "DELETE FROM workout_crud.workout_exercise WHERE workout_id = %s", [str(id)])

    for exercise in exercises:
        cursor.execute("""INSERT INTO workout_crud.workout_exercise (workout_id, exercise, reps, sets) VALUES (%s, %s, %s, %s) """,
                       (id, exercise.exercise, exercise.reps, exercise.sets))
        cursor.execute(
            """ SELECT exercise FROM workout_crud.workout_exercise WHERE exercise = %s""", [exercise.exercise])
        workoutList = cursor.fetchall()
        conn.commit()
        if not workoutList:
            return {'message': 'exercise not created'}
    return {'message': 'all worked out'}
