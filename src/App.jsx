import { useState } from "react";

import "tailwindcss/tailwind.css";
import "./tailwind.css";
import { Button } from "reactstrap";

import "./App.css";
import StartScreen from "./Components/StartScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-blue-500 text-white p-4 font-bold underline">
        Hello, Tailwind!
        <StartScreen/>
        <Button color="danger">Click Me</Button>
      </div>
    </>
  );
}

export default App;
