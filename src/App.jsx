import Hero from "./components/Hero";
import SliderNFT from "./components/SliderNFT";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderGame from "./components/SliderGame";
import WhatGame from "./components/WhatGame";
import Tokens from "./components/Tokens";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";




function App() {

  return (
    <>
      <Hero />
      <SliderNFT />
      <SliderGame/>
      <WhatGame/>
      <Tokens/>
      <Roadmap/>
      <Team/>
    </>

  );
}

export default App;
