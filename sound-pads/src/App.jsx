import React from "react";
import pads from "./assets/pads.js";
import Pad from "./components/Pad.jsx";

export default function App() {
  const [padsState, setPadsState] = React.useState(pads);

  function toggle(id) {
    console.log(id); 
    setPadsState((prevPads) =>
      prevPads.map((pad) => (pad.id === id ? { ...pad, on: !pad.on } : pad)) //look if the pad id is the same as the one clicked, if so, toggle the on state, if not, return the pad as is
    );
  }

  const buttonElements = padsState.map((pad) => {
    return (
      <Pad
        key={pad.id}
        id={pad.id}
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
