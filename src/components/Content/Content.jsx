import React, { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dipankar");
  const [count, setCount] = useState(0);

  const handleNameChanged = () => {
    const names = ["Dipankar", "Sumon", "Akash"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
    console.log("cliked");
  };
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <main>
      <h2 className="text-3xl text-blueColor">Groceries List</h2>
      <p>Hello {name}</p>
      <h4>Increase Number: {count}</h4>
      <div className="space-x-4">
        <button
          onClick={handleNameChanged}
          className="bg-gray-300 px-4 py-2 my-4 rounded"
        >
          Click it
        </button>
        <button
          className="bg-slate-600 text-white px-3 py-2 rounded shadow"
          onClick={handleCount}
        >
          Count
        </button>
      </div>
    </main>
  );
};

export default Content;
