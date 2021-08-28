import React from "react";
const Qualities = ({ qualities }) => {
  return (
    <>
      {" "}
      {qualities.map(({ color, name, _id }) => (
        <span className={`badge bg-${color} m-1`} key={_id}>
          {name}
        </span>
      ))}
    </>
  );
};

export default Qualities;
