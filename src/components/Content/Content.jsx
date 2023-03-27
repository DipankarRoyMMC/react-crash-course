import React from "react";

const Content = () => {
  const handleNameChanged = () => {
    const names = ["Dipankar", "Sumon", "Akash"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <main>
      <p>Hello {handleNameChanged()}</p>
    </main>
  );
};

export default Content;
