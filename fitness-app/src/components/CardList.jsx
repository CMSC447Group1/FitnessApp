import ExerciseCard from "./ExerciseCard";

const CardList = (props) => {
  const exercises = props.exercises;

  return (
    <div className="flex mt-4">
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {exercises.map((exercise) => (
            <ExerciseCard exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
