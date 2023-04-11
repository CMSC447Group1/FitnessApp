import WorkoutCard from "./WorkoutCard";

const WorkoutList = (props) => {
  const workouts = props.workouts;

  const workouts_test = [
    {
      id: 1,
      name: "push workout",
      description: "this is a short description of the workout",
    },
    {
      id: 2,
      name: "pull workout",
      description: "this is another short description",
    },
    {
      id: 2,
      name: "pull workout",
      description: "this is another short description",
    },
    {
      id: 3,
      name: "legs workout",
      description: "this is another short description",
    },
    {
      id: 4,
      name: "chest/back workout",
      description: "this is another short description",
    },
    {
      id: 5,
      name: "arms workout",
      description: "this is another short description",
    },
    {
      id: 6,
      name: "legs 2 workout",
      description: "this is another short description",
    },
  ];

  return (
    <div className="flex mt-4">
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {workouts_test.map((workouts) => (
            <WorkoutCard workouts={workouts} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutList;
