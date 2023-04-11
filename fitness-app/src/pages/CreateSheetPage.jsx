import React from "react";
import ExercisesSection from "../components/ExercisesSection";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreateSheetPage = () => {
  const [exercises, setExercises] = useState([]);

  function addExercises(exercise) {
    if (!exercises.includes(exercise))
      setExercises((oldArray) => [...oldArray, exercise]);
  }

  function deleteExercise(value) {
    setExercises((oldValues) => {
      return oldValues.filter((exercise) => exercise !== value);
    });
  }

  return (
    <>
      <Navbar />

      <div className=" flex h-fit flex-row">
        {/* leftSide */}
        <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black flex flex-[30%] flex-col text-white rounded-3xl m-3">
          <label for="helper-text" class="mt-3 flex justify-center font-medium">
            Name Your Workout
          </label>
          <input
            id="helper-text"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 mt-2 border self-center border-gray-300 text-gray-900 text-sm rounded-lg block w-[80%] p-2.5  "
            placeholder='e.g. "Monday Workout" '
          />

          <div className=" mt-6 flex justify-start ml-2 font-medium">
            Exercises Chosen
          </div>

          {exercises.length <= 0 ? (
            <div className="flex font-light text-gray-400 mt-16 justify-center">
              No Exercises Chosen Yet
            </div>
          ) : (
            <ul class=" divide-y divide-gray-200 mt-5">
              {exercises.map((exercise) => (
                <li>
                  <div class="flex items-center mx-4">
                    <div class="flex-shrink-0"></div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium truncate text-white">
                        {exercise}
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-white">
                      <IconButton onClick={() => deleteExercise(exercise)}>
                        <DeleteIcon className=" text-white" />
                      </IconButton>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 justify-center flex">
            <Button
              variant="contained"
              disabled={exercises.length <= 0 ? true : false}
              className="from-pink-500 to-orange-400"
              style={{
                textTransform: "none",
                fontSize: 15,
                minWidth: 10,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                background:
                  "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                borderRadius: 20,
              }}
            >
              Save Workout
            </Button>
          </div>
        </div>

        {/* rightSide */}
        <div className=" flex flex-[95%] mt-3 flex-col">
          <div className="text-[#121619] flex flex-row justify-center items-center font-medium text-xl">
            Select your exercises
          </div>
          <ExercisesSection callBack={addExercises} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CreateSheetPage;
