import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#F3F3F3]">
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
