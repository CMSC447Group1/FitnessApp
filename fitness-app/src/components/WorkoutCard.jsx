import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const WorkoutCard = (props) => {
  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(
        "https://fitness-app-backend-ce39.onrender.com/myworkouts/" + id
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="max-w-sm bg-gradient-to-tr from-gray-50 to-slate-200 border border-slate-200 h-fit p-6 m-2 rounded-lg shadow-xl ">
      <Link to="/myWorkout" state={{ data: props.workouts }}>
        <h5 class="mb-2 text-2xl text-black hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br hover:from-sky-400 hover:to-blue-600 font-bold tracking-tight">
          {props.workouts.name}
        </h5>
      </Link>
      <p class="mb-3 font-normal text-black">{props.workouts.description}</p>

      <div className="flex flex-row space-x-3">
        <button
          class="flex flex-row items-center px-3 py-2 text-sm 
      font-medium text-center text-white bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg hover:transform hover:scale-105 hover:transition"
        >
          <Link to="/editWorkoutSheet" state={{ data: props.workouts }}>
            <text className="mx-1">Edit Workout</text>
            <EditIcon fontSize="small" />
          </Link>
        </button>
        <button
          class="inline-flex items-center px-3 py-2 text-sm 
      font-medium text-center text-white rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 hover:transform hover:scale-105 hover:transition"
          onClick={() => handleDelete(props.workouts.id)}
        >
          <text className="mx-1">Delete Workout</text>
          <DeleteForeverIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
