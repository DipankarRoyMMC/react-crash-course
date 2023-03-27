import React from "react";

const Home = () => {
  return (
    <div className="md:container px-4 md:px-0 mx-auto text-center">
      <div className="my-5">
        <h2 className="text-2xl font-semibold text-red-500 mb-3">
          Welcome to Home Page
        </h2>
        <p className="text-[16px] mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eum ea
          at perspiciatis consequatur, provident aliquam non, deserunt, mollitia
          delectus suscipit quis laudantium! Vero delectus aut ratione nihil.
          Tempore architecto eos voluptatibus.
        </p>
        <button className="bg-slate-400 px-3 py-2 rounded shadow">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Home;
