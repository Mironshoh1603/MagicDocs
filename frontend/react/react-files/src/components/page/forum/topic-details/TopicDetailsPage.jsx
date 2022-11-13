import React from "react";
import Breadcrumb from "../../../common/Breadcrumb";
import TopicDetailsArea from "./TopicDetailsArea";

function TopicDetailsPage() {
  return (
    <>
      <Breadcrumb pageName="Topic Details" pageTitle="Topic Details" />
      <TopicDetailsArea />
    </>
  );
}

export default TopicDetailsPage;
