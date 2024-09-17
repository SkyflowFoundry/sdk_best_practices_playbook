/*
  Copyright (c) 2022 Skyflow, Inc.
*/
import React, { useState } from "react";
import CollectElements from "./components/CollectElements";
import RevealElements from "./components/RevealElements";

const App = () => {
  const [showSkyflowElements, setShowSkyflowElements] = useState(false);

  const handleButtonClick = () => {
    setShowSkyflowElements(true);
  };

  return (
    <div id="App">
      <div className="card">
        <h3>Please acknowledge to collect Card Details.</h3>
        <button onClick={handleButtonClick}>Yes, I acknowledge</button>
      </div>
      <div style={showSkyflowElements ? { display: 'block' } : { display: 'none' }}>
      <div id="Sample for Collect Elements">
        <p>
          <b>Sample Collect Elements</b>
        </p>
        <CollectElements />
      </div>
      <br />
      <div id="Sample for Reveal Element">
        <p>
          <b>Sample Reveal Element</b>
        </p>
        <RevealElements />
      </div>
    </div>
    </div>
  );
};

export default App;
