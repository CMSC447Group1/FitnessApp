import React from "react";

import Button from "@mui/material/Button";

const HeroSection = () => {
  return (
    // <div className="flex w-full flex-col items-center h-72 bg-black overflow-clip ">
    //   {/* <div className="flex flex-col justify-center ml-3"> */}
    //   <h1 class="text-5xl text-transparent bg-gradient-to-br from-pink-500 to-orange-400 bg-clip-text mb-10 ">
    //     Welcome to Group 1's Fitness Webapp
    //   </h1>
    //   <h4 class="text-info text-white">
    //     Find exercises for your next workout, or take a look at our premade
    //     workout sheets.
    //   </h4>
    //   {/* <button
    //       className="relative inline-flex items-center justify-center p-0.5
    //       overflow-hidden text-sm font-medium text-gray-900 rounded-lg group
    //       bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500
    //        group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4
    //        focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
    //       onClick={" "}
    //     >
    //       Exercises
    //     </button>{" "}
    //     <button
    //       className="relative inline-flex items-center justify-center p-0.5
    //       overflow-hidden text-sm font-medium text-gray-900 rounded-lg group
    //       bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500
    //        group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4
    //        focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
    //       size="sm"
    //       onClick={" "}
    //     >
    //       Workout sheets
    //     </button>{" "} */}
    //   {/* </div> */}

    //   {/* <div className="flex w-full justify-end aspect-video">
    //     <img
    //       className=" rounded-lg"
    //       src="https://img.freepik.com/free-photo/exercise-weights-iron-dumbbell-with-extra-plates_1423-223.jpg?w=900&t=st=1678220069~exp=1678220669~hmac=f188694fa332fa47df49db5c622cfdb15615269630b2e989479cd4dde9d2a085')"
    //     />
    //   </div> */}
    // </div>

    <div
      class="relative overflow-hidden bg-no-repeat bg-cover p-5"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/exercise-weights-iron-dumbbell-with-extra-plates_1423-223.jpg?w=900&t=st=1678220069~exp=1678220669~hmac=f188694fa332fa47df49db5c622cfdb15615269630b2e989479cd4dde9d2a085')",
        height: 400,
      }}
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
      >
        <div class="flex justify-center items-center h-full">
          <div class="text-center text-white px-6 md:px-12">
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              Welcome to Group 1's <br />
              <span>Fitness Webapp</span>
            </h1>
            <Button
              variant="contained"
              className="from-pink-500 to-orange-400"
              size="large"
              style={{
                textTransform: "none",
                fontSize: 20,
                minWidth: 100,
                background:
                  "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                borderRadius: 20,
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
