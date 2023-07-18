import React from "react";

const Color = ({ colorData, setColor }) => {
  return (
    <>
      <ul className="colors ps-">
      {colorData &&
  colorData.map((color) => {
    console.log(color?.title);
    return (
      <li
        onClick={() => setColor(color?._id)}
        key={color?._id}
        style={{ backgroundColor: `${color?.title}` }}
      ></li>
    );
  })}
      </ul>
    </>
  );
};

export default Color;
