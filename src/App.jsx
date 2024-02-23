import { useState } from "react";
import "./App.css";
import Services from "./Components/Services/Services";
import Hero from "./Components/Hero/Hero";
import SubHero from "./Components/Sub Hero/SubHero";
import Industry from "./Components/Industry/Industry";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Hero /> */}
      {/* <SubHero/> */}
      {/* <Services/> */}
      <Industry/>
    </>
  );
}

export default App;
