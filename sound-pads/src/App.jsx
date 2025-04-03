import React from "react";
import pads from "./assets/pads.js";
import Pad from "./components/Pad.jsx";

export default function App() {
  const [padsState, setPadsState] = React.useState(pads);

  const buttonElements = padsState.map((pad) => {
    return <Pad key={pad.id} color={pad.color} pad={pad} />;
  });
  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
