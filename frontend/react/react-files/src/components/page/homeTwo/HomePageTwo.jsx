import React from "react";
import Home2AboutArea from "./Home2AboutArea";
import Home2BlogArea from "./Home2BlogArea";
import Home2documentationArea from "./Home2documentationArea";
import Home2HeroArea from "./Home2HeroArea";
import Home2KnlowledgeArea from "./Home2KnlowledgeArea";
import Home2SupportArea from "./Home2SupportArea";
import Home2Testimonial from "./Home2Testimonial";
// import SimpleSlider from "./Test";

function HomePageTwo() {
  return (
    <>
      <Home2HeroArea />
      <Home2AboutArea />
      <Home2KnlowledgeArea />
      <Home2SupportArea />
      <Home2documentationArea />
      <Home2Testimonial />
      <Home2BlogArea />
    </>
  );
}

export default HomePageTwo;
