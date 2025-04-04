import React, { useState } from "react";

const Pad = (props) => {
  const [isOn, setIsOn] = useState(props.on);

  const handleClick = () => {
    setIsOn((prev) => !prev);
    props.toggle();
  };

  return (
    <button
      style={{ backgroundColor: props.color }}
      className={isOn ? "on" : ""}
      onClick={handleClick}
    ></button>
  );
};

export default Pad;
