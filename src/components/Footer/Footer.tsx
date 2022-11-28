import React from "react";

const Footer = () => {
  return (
    <div>
      <label htmlFor="all">
        <input type="text" name="all" id="all" />
        ALL
      </label>
      <p>you have 0 todo</p>
      <button id="delete">delete</button>
    </div>
  );
};

export default Footer;
