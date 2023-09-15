import { useState } from "react";

import "./App.css";
import Hero from "./components/hero/Hero";
import Hero2 from "./components/hero/Hero2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#F3F3F3]">
        <Hero2></Hero2>
      </div>
    </>
  );
}

export default App;
