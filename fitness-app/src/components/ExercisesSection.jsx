import React, { useState } from "react";

import SearchBox from "./SearchBox";
import DropdownButton from "./DropdownButton";

import { api_options } from "../constants";
import CardList from "./CardList";

import axios from "axios";

const ExercisesSection = () => {
  const [muscle, setMuscle] = useState("");
  const [exerciseName, setExerciseName] = useState("");
  const [level, setLevel] = useState("");
  const [type, setType] = useState("");
  const [apiData, setApiData] = useState([{}]);

  const options = {
    method: "GET",
    url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
    params: {
      muscle: muscle === "none" ? "" : muscle,
      difficulty: level === "none" ? "" : level,
      type: type === "none" ? "" : type,
      name: exerciseName,
    },
    headers: {
      "X-RapidAPI-Key": "6f5be83ac5mshc37c3a72ee27060p1ff6dfjsnba56b9f36672",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  //API Handling
  function apiCall() {
    axios
      .request(options)
      .then(function (response) {
        setApiData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className="flex flex-col overflow-clip">
      {/* Search header group */}
      <div className="flex flex-col items-center sm:mt-2 sm:flex-row sm:justify-evenly ">
        {/* Search by Name Box*/}
        <SearchBox callBack={setExerciseName} onKeyDownFunc={apiCall} />

        {/* Dropdown Selects */}

        <div>
          <DropdownButton
            title={api_options[0].title}
            results={api_options[0].results}
            key={api_options[0].id}
            callBack={setMuscle}
          />
        </div>
        <div>
          <DropdownButton
            title={api_options[1].title}
            results={api_options[1].results}
            key={api_options[1].id}
            callBack={setType}
          />
        </div>
        <div>
          <DropdownButton
            title={api_options[2].title}
            results={api_options[2].results}
            key={api_options[2].id}
            callBack={setLevel}
          />
        </div>

        <div className="mt-0 sm:mt-6">
          <button
            class="relative inline-flex items-center justify-center p-0.5 
          overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
          bg-gradient-to-tr from-sky-400 to-sky-200 group-hover:from-pink-500
           group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 
           focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            onClick={apiCall}
          >
            <span class="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              View Exercises
            </span>
          </button>
        </div>
      </div>
      {apiData.length > 1 ? (
        <CardList exercises={apiData} />
      ) : (
        <div className=" text-gray-500 flex items-center justify-center mt-32">
          No results were found <br /> Try using other filter options
        </div>
      )}
    </div>
  );
};

export default ExercisesSection;
