import React from "react";
import SheetExerciseCard from "../components/SheetExerciseCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const exercises = [
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
  return (
    <div classname="flex justify-center items-center flex-wrap">
      <Navbar />
      {exercises.map((exercise) => (
        <SheetExerciseCard exercise={exercise} />
      ))}
      <Footer />
    </div>
  );
};

export default WorkoutPage;
