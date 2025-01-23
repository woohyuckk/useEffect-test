import { useState } from "react";

import "./App.css";
import Timer from "./component/Timer";


//showTimer

function App() {
  const [showTimer, setShowTimer] =useState(false);
  return (
    <div>
      {showTimer && <Timer/>}
      <button onClick={()=>{ setShowTimer(!showTimer)}}>Toggle Timer</button>
    </div>
  );
}

export default App;
