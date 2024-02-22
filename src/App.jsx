import { useState } from "react";
import "./App.css";
import Services from "./Components/Services/Services";
import Hero from "./Components/Hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      {/* <Services/> */}
    </>
  );
}

export default App;
