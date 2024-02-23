import { useState } from "react";
import "./App.css";
import Services from "./Components/Services/Services";
import Hero from "./Components/Hero/Hero";
import SubHero from "./Components/Sub Hero/SubHero";
import Industry from "./Components/Industry/Industry";
import MoresService from "./Components/MoreService/MoresService";
import Partners from "./Components/Partners/Partners";
import Careers from "./Components/Careers/Careers";
import Footer from "./Components/Footer/Footer";
import Slider from "./Components/Slider Section/Slider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <SubHero />
      <Slider />

      <Services />
      <Industry />
      <MoresService />
      <Partners />
      <Careers />
      <Footer />
    </>
  );
}

export default App;
