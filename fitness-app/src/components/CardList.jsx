import ExerciseCard from "./ExerciseCard";

const CardList = (props) => {
  const exercises = props.exercises;
  return (
    <div className="flex flex-wrap justify-start">
      {exercises.map((exercise) => (
        <ExerciseCard exercise={exercise} callBack={props.callBack} />
      ))}
    </div>
  );
};

export default CardList;
