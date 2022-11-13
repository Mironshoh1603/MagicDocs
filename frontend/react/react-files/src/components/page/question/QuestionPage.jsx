import React from "react";
import AskFromArea from "./AskFromArea";
import TopicSectionArea from "./TopicSectionArea";
import Breadcrumb from "../../common/Breadcrumb";

function QuestionPage() {
  return (
    <>
    <Breadcrumb pageName="Ask A Question?" pageTitle="Ask A Question?" />
        <AskFromArea />
        <TopicSectionArea />
      </>
  )
}

export default QuestionPage