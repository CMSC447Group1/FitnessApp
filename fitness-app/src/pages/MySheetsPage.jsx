import React from "react";
import { Link } from "react-router-dom";
import WorkoutList from "../components/WorkoutList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MySheetsPage = () => {
  return (
    <>
      {/* <div>SheetsPage</div>
      <div>
        <Link to="/createWorkoutSheet">
          <button
            class="relative inline-flex items-center justify-center p-0.5 
          overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
          bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500
           group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 
           focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          >
            <span class="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Create Workout
            </span>
          </button>
        </Link>
      </div> */}

      <div>
        <Navbar />

        <h4 class="flex text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">
          Workout sheet list
        </h4>

        <Link to="/createWorkoutSheet">
          <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Create Workout
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://localhost:5173/sheets"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>

        <WorkoutList />

        <Footer />
      </div>
    </>
  );
};

export default MySheetsPage;
