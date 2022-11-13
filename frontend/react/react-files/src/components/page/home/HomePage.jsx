import React from "react";
import AboutArea from "./AboutArea";
import BlogArea from "./BlogArea";
import Documentation from "./Documentation";
import KnowledgeBaseArea from "./KnowledgeBaseArea";
import MainBanner from "./MainBanner";
import NewsLetterArea from "./NewsLetterArea";
import SupporForumArea from "./SupporForumArea";
import TestimonialArea from "./TestimonialArea";

function HomePage() {
  return (
    <>
      <MainBanner />
      <AboutArea />
      <KnowledgeBaseArea />
      <SupporForumArea />
      <Documentation />
      <TestimonialArea />
      <BlogArea />
      <NewsLetterArea />
    </>
  );
}

export default HomePage;
