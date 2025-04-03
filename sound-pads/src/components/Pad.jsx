import React, { useState } from "react";

const Pad = (props) => {
  const [isOn, setIsOn] = useState(props.on);

  const togglePad = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <button
      style={{ backgroundColor: props.color }}
      className={isOn ? "on" : undefined}
      onClick={togglePad}
    ></button>
  );
};

export default Pad;
