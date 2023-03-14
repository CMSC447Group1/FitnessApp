import React from "react";

const HeroSection = () => {
  return (
    <div className="flex w-full flex-row bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="flex flex-col justify-center ml-3">
        <h1 class="text-5xl text-white mb-10">
          Welcome to Group 1's Fitness Webapp
        </h1>
        <h4 class="text-info text-white">
          Find exercises for your next workout, or take a look at our premade
          workout sheets.
        </h4>
        {/* <button
          className="relative inline-flex items-center justify-center p-0.5 
          overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
          bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500
           group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 
           focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          onClick={" "}
        >
          Exercises
        </button>{" "}
        <button
          className="relative inline-flex items-center justify-center p-0.5 
          overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
          bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500
           group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 
           focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          size="sm"
          onClick={" "}
        >
          Workout sheets
        </button>{" "} */}
      </div>

      <div className="flex w-full lg:mt-0 lg:col-span-5 lg:flex justify-end">
        <img
          className=" rounded-lg"
          src="https://img.freepik.com/free-photo/exercise-weights-iron-dumbbell-with-extra-plates_1423-223.jpg?w=900&t=st=1678220069~exp=1678220669~hmac=f188694fa332fa47df49db5c622cfdb15615269630b2e989479cd4dde9d2a085')"
        />
      </div>
    </div>
  );
};

export default HeroSection;
