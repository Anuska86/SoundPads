import React from "react";
import pads from "./assets/pads.js";

export default function App({ darkMode }) {
  const [padState, setPadState] = React.useState(pads);

  const styles = { backgroundColor: darkMode ? "#222222" : "#cccccc" };

  const buttonElements = padState.map((pad) => (
    <button key={pad.id} style={styles}>
      {pad.label}
    </button>
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
