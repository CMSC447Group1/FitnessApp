import React from "react";

const Features = () => {
  const data = [
    {
      name: "exercises",
      value: "3000+",
    },
    {
      name: "muscles to choose from",
      value: "17",
    },
    {
      name: "types of training",
      value: "7",
    },
  ];
  return (
    <div className="mb-10 mt-5">
      <div className="flex w-full justify-center items-center mb-3">
        <h1 className="p-3 bg-clip-text bg-gradient-to-t from-gray-800 via-gray-900 to-black text-center justify-center items-center mt-1 text-transparent text-2xl sm:text-5xl xl:text-6xl font-bold">
          Check our Exercise Catalog
        </h1>
      </div>
      <section className="flex flex-col xs:flex-row m-3 justify-center items-center">
        {data.map((feature) => (
          <div className="w-full h-full flex justify-start sm:justify-center items-center flex-row m-2">
            <h4 className=" font-bold text-2xl ml-1 sm:ml-0 sm:text-4xl bg-clip-text  bg-gradient-to-tr from-gray-800 via-gray-900 to-black text-transparent">
              {feature.value}
            </h4>
            <p className="font-semibold text-md sm:text-xl text-gradient uppercase m-3 bg-clip-text bg-gradient-to-br from-sky-400 to-blue-500 text-transparent">
              {feature.name}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Features;
