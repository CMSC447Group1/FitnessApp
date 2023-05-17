import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";

import { IconButton } from "@mui/material";

const ExerciseCard = (props) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="flex flex-col bg-gradient-to-t from-gray-800 via-gray-900 to-black overflow-hidden rounded-lg shadow-lg shadow-slate-800">
        <div className="flex items-center justify-center">
          <text className="text-2xl text-white truncate">
            {props.exercise.name}
          </text>
          {props.callBack != null ? (
            <IconButton onClick={() => props.callBack(props.exercise.name)}>
              <AddCircleIcon className=" text-slate-400" />
            </IconButton>
          ) : (
            <div />
          )}
        </div>
        <div class="flex w-full space-x-2 items-center justify-center">
          <div class="flex flex-col p-1 w-full items-center justify-center">
            <text className="text-white text-xs sm:text-sm">Type</text>
            <div className="flex p-2 items-center justify-center h-10 w-10 xl:h-12 xl:w-12 rounded-full shadow-lg shadow-black bg-gradient-to-r from-sky-400 to-blue-700">
              <img
                className="flex h-6 w-6 xl:h-8 xl:w-8"
                src={"/assets/" + props.exercise.type + ".png"}
              />
            </div>
            <text className="text-white overflow-clip text-xs sm:text-sm">
              {props.exercise.type}
            </text>
          </div>
          <div class="flex flex-col p-1 w-full items-center justify-center">
            <text className="text-white text-xs sm:text-sm">Muscle</text>
            <div className="flex p-2 items-center justify-center h-10 w-10 xl:h-12 xl:w-12 rounded-full shadow-lg shadow-black bg-gradient-to-r from-sky-400 to-blue-700">
              <img
                class="flex h-6 w-6 xl:h-8 xl:w-8"
                src={"/assets/" + props.exercise.muscle + ".png"}
              />
            </div>
            <text className="text-white text-xs sm:text-sm">
              {props.exercise.muscle}
            </text>
          </div>
          <div class="flex flex-col p-1 w-full items-center justify-center">
            <text className="text-white text-xs sm:text-sm">Difficulty</text>
            <div className="flex p-2 items-center justify-center h-10 w-10 xl:h-12 xl:w-12 rounded-full shadow-lg shadow-black bg-gradient-to-r from-sky-400 to-blue-700">
              <img
                class="flex h-6 w-6 xl:h-8 xl:w-8"
                src={"/assets/" + props.exercise.difficulty + ".png"}
              />
            </div>
            <text className="text-white text-xs sm:text-sm">
              {props.exercise.difficulty}
            </text>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ExerciseCard;
