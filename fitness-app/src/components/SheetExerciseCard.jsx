import React, { useState, useEffect } from "react";
import axios from "axios";

const SheetExerciseCard = (props) => {
  const [apiData, setApiData] = useState([{}]);

  const options = {
    method: "GET",
    url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
    params: {
      name: props.exercise.exercise,
    },
    headers: {
      "X-RapidAPI-Key": "6f5be83ac5mshc37c3a72ee27060p1ff6dfjsnba56b9f36672",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  useEffect(() => {
    function apiCall() {
      axios
        .request(options)
        .then(function (response) {
          setApiData(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    apiCall();
  }, []);

  return (
    <div className="flex max-w-sm items-center bg-gradient-to-t from-gray-800 via-gray-900 to-black justify-center flex-col rounded-md shadow-slate-800 my-4  h-fit min-w-[25rem] w-fit shadow-lg">
      <article>
        <div className="flex items-center justify-center leading-tight p-2 md:p-4">
          <text className="text-2xl text-white truncate">
            {props.exercise.exercise}
          </text>
        </div>
        <div class="flex p-2 w-full space-x-2 items-center justify-center">
          <div class="flex flex-col p-1 w-full items-center justify-center">
            <text className="text-white text-xs sm:text-sm">Type</text>
            <div className="flex p-2 items-center justify-center h-12 w-12 rounded-full shadow-lg shadow-black bg-gradient-to-r from-sky-400 to-blue-700">
              <img
                className="flex w-fit h-fit"
                src={"/src/assets/" + apiData[0].type + ".png"}
              />
            </div>
            <text className="text-white text-xs sm:text-sm">
              {apiData[0].type}
            </text>
          </div>
          <div class="flex flex-col p-1 w-full items-center justify-center">
            <text className="text-white text-xs sm:text-sm">Muscle</text>
            <div className="flex p-2 items-center justify-center h-12 w-12 rounded-full shadow-lg shadow-black bg-gradient-to-r from-sky-400 to-blue-700">
              <img
                class="flex h-8 w-8"
                src={"/src/assets/" + apiData[0].muscle + ".png"}
              />
            </div>
            <text className="text-white text-xs sm:text-sm">
              {apiData[0].muscle}
            </text>
          </div>
          <div class="flex flex-col p-1 w-full items-center justify-center">
            <text className="text-white text-xs sm:text-sm">Difficulty</text>
            <div className="flex p-2 items-center justify-center h-12 w-12 rounded-full shadow-lg shadow-black bg-gradient-to-r from-sky-400 to-blue-700">
              <img
                class="flex h-8 w-8"
                src={"/src/assets/" + apiData[0].difficulty + ".png"}
              />
            </div>
            <text className="text-white text-xs sm:text-sm">
              {apiData[0].difficulty}
            </text>
          </div>
        </div>
        <div class="flex flex-col bg-gradient-to-br from-yellow-500 to-yellow-800  rounded-lg m-3  items-center justify-between leading-none p-2 md:p-4">
          <text className="text-lg text-white font-bold">
            Exercise Instructions
          </text>
          <p className="text-white text-sm">{apiData[0].instructions}</p>
        </div>
        {/* <div class="flex flex-col bg-gradient-to-tr from-gray-50 to-slate-200 rounded-lg m-3  items-center justify-between leading-none p-2 md:p-4">
          <text className="text-lg text-black font-bold">
            Exercise Instructions
          </text>
          <p className="text-black text-sm">{apiData[0].instructions}</p>
        </div> */}
      </article>
    </div>
  );
};

export default SheetExerciseCard;
