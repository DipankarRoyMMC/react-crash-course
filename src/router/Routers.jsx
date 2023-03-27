import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Content from "../components/Content/Content";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/content", element: <Content></Content> },
    ],
  },
]);

export default router;
