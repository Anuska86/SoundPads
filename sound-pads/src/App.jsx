import React from "react";
import pads from "./assets/pads.js";

export default function App() {
  const [padState, setPadState] = React.useState(pads);

  const buttonElements = padState.map((pad) => <button key={pad.id}></button>);

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
