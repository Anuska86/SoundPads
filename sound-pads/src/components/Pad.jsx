import React, { useState } from "react";

const Pad = (props) => {
  console.log(props.on);

  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.on ? "on" : undefined}
    ></button>
  );
};

export default Pad;
