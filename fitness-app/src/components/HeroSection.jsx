import React from "react";
import Hero from "../assets/hero.png";
const HeroSection = () => {
  return (
    // <div className="flex flex-row bg-black overflow-clip">
    //   <div className="flex flex-col justify-center m-3">
    //     <text class="text-5xl text-white mb-10">
    //       Welcome to Group 1's Fitness Webapp
    //     </text>
    //     <text class="text-white">
    //       Find exercises for your next workout, or take a look at our premade
    //       workout sheets.
    //     </text>
    //     {/* <button
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
    //   </div>
    //   <div className="flex justify-end">
    //     <img className="aspect-auto" src={Hero} />
    //   </div>
    // </div>

    <header class="my-24">
      <div
        class="w-full bg-center bg-cover"
        style={{
          backgroundImage:
            "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
          <div class="text-center">
            <div class="container px-4 mx-auto">
              <div class="max-w-4xl mx-auto text-center">
                <span class="text-gray-200 font-semibold uppercase tracking-widest">
                  New feature
                </span>
                <h2 class="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p class="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum sit cum iure qui, nostrum at sapiente ducimus.
                </p>
                <a
                  class="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                  href="#"
                >
                  start your free trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
