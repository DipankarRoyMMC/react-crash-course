import React from "react";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="text-center">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

export default App;
