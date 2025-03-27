import React from "react";

const Footer = () => {
  const currentYear = new Date();

  return (
    <footer className="">
      <div className="container-large">Footer {`${currentYear}`}</div>
    </footer>
  );
};

export default Footer;
