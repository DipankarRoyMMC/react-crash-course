import React from "react";

const Footer = () => {
  const day = new Date();
  return (
    <div>
      <p>Copyright &copy; {day.getFullYear()}</p>
    </div>
  );
};

export default Footer;
