import React from "react";

const App = () => {
  const handleNameChanged = () => {
    const names = ["Dipankar", "Abir", "Sumon"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <div>
      <h1 className="text-orange-500 text-3xl text-center">
        Hello {handleNameChanged()}
      </h1>
    </div>
  );
};

export default App;
