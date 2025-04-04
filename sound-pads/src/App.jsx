import React from "react";
import pads from "./assets/pads.js";
import Pad from "./components/Pad.jsx";

export default function App() {
  const [padsState, setPadsState] = React.useState(pads);

  function toggle(id) {
    console.log("clicked"); 
    setPadsState((prevPads) =>
      prevPads.map((pad) => (pad.id === id ? { ...pad, on: !pad.on } : pad))
    );
  }

  const buttonElements = padsState.map((pad) => {
    return (
      <Pad
        key={pad.id}
        color={pad.color}
        on={pad.on}
        toggle={() => toggle(pad.id)}
      />
    );
  });

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
