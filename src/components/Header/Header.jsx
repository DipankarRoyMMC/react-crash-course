import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="md:container px-4 md:px-0 mx-auto my-1 shadow-md">
      <nav className="flex justify-center items-center py-3 border ">
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/content">Groceries</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
