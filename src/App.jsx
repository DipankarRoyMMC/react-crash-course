import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routers";

const App = () => {
  return (
    <div className="text-center">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
