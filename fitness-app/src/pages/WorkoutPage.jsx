import React, { useState, useEffect } from "react";
import SheetExerciseCard from "../components/SheetExerciseCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

const exercises_test = [
  {
    id: 1,
    difficulty: "intermediate",
    name: "test_exercise1",
    type: "type1",
    weight: 185,
    reps: "8-10",
  },
  {
    id: 2,
    difficulty: "Expert",
    name: "test_exercise2",
    type: "type2",
    weight: 225,
    reps: "4-6",
  },
  {
    id: 3,
    difficulty: "Beginner",
    name: "test_exercise3",
    type: "type3",
    weight: 90,
    reps: "10-12",
  },
];

const WorkoutPage = () => {
  const location = useLocation();
  const data = location.state?.data;

  const [exercises, setExercises] = useState([{}]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const url = "http://localhost:8000/myworkouts/" + data.id;
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
        <h4 className="text-4xl mt-1 font-bold leading-tight text-gray-800 dark:text-gray-100">
          {data.name}
        </h4>

        <div className="flex flex-col justify-center items-center">
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
