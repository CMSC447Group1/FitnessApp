import React, { useState, useEffect } from "react";
import SheetExerciseCard from "../components/SheetExerciseCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

const WorkoutPage = () => {
  const location = useLocation();
  const data = location.state?.data;

  console.log(data);
  const [exercises, setExercises] = useState([{}]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const url =
          "https://fitness-app-backend-ce39.onrender.com/myworkouts/" + data.id;
        const response = await axios.get(url);
        // console.log(response.data);
        setExercises(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />

      <div className="flex flex-col h-full items-center">
        <h4 className=" font-bold ml-3 text-transparent text-5xl bg-clip-text bg-gradient-to-br from-gray-800 to-slate-800 mt-1 leading-tight text-gray-800 dark:text-gray-100">
          {data.name}
        </h4>

        <div className="flex flex-col mx-3 justify-center items-center">
          {exercises.map((exercise) => (
            <SheetExerciseCard exercise={exercise} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorkoutPage;
