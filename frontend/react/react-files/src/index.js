import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// layout pages
import MainLayout from "./components/layout/MainLayout";
import SecounLayout from "./components/layout/SecounLayout";
import InnerPageLayout from "./components/App";
// all css import
import "./index.css";

import DocumentsPage from "./components/page/docs/DocumentsPage";
import DocumentsDEtailsPage from "./components/page/document-details/DocumentsDetailsPage";
import FaqPage from "./components/page/faq/FaqPage";
import SignUpPage from "./components/page/sign-up/SignUpPage";
import LoginPage from "./components/page/login/LoginPage";
import ErrorPage from "./components/page/error/ErrorPage";
import QuestionPage from "./components/page/question/QuestionPage";
import TopicPage from "./components/page/forum/topic/TopicPage";
import TopicDetailsPage from "./components/page/forum/topic-details/TopicDetailsPage";
import ForumQuestionPage from "./components/page/forum/forum-question/ForumQuestionPage";
import BlogGridPage from "./components/page/blog/blogGrid/BlogGridPage";
import BlogSidebarPage from "./components/page/blog/blogSidebar/BlogSidebarPage";
import BlogDetailsPage from "./components/page/blog/blogDetails/BlogDetailsPage";
import ContactPage from "./components/page/contact/ContactPage";
//Default Warniing Error Hide
import { Provider } from "react-redux";
import store from "./components/Reducers/store";

console.log = console.warn = console.error = () => {};

function Root() {
   return (
      <Provider store={store}>
         <BrowserRouter basename="/">
            <Switch>
               <Route exact path="/" component={MainLayout} />
               <Route path={`${process.env.PUBLIC_URL}/home-two`} component={SecounLayout} />

               <InnerPageLayout>
                  <Route
                     exact
                     path={`${process.env.PUBLIC_URL}/about-us`}
                     component={ContactPage}
                  />
                  <Route
                     exact
                     path={`${process.env.PUBLIC_URL}/documents`}
                     component={DocumentsPage}
                  />
                  <Route
                     exact
                     path={`${process.env.PUBLIC_URL}/document-details`}
                     component={DocumentsDEtailsPage}
                  />
                  <Route exact path={`${process.env.PUBLIC_URL}/faq`} component={FaqPage} />
                  <Route exact path={`${process.env.PUBLIC_URL}/sign-up`} component={SignUpPage} />
                  <Route exact path={`${process.env.PUBLIC_URL}/login`} component={LoginPage} />
                  <Route exact path={`${process.env.PUBLIC_URL}/error`} component={ErrorPage} />
                  <Route
                     exact
                     path={`${process.env.PUBLIC_URL}/question`}
                     component={QuestionPage}
                  />
                  <Route exact path={`${process.env.PUBLIC_URL}/topic`} component={TopicPage} />
                  <Route
                     exact
                     path={`${process.env.PUBLIC_URL}/topic-details`}
                     component={TopicDetailsPage}
                  />
                  <Route
                     exact
                     path={`${process.env.PUBLIC_URL}/forum-q`}
                     component={ForumQuestionPage}
                  />
                  <Route
                     exact
                     path={`${process.env.PUBLIC_URL}/blog-grid`}
                     component={BlogGridPage}
                  />
                  <Route
                     exact
                     path={`${process.env.PUBLIC_URL}/blog-sidebar`}
                     component={BlogSidebarPage}
                  />
                  <Route
                     exact
                     path={`${process.env.PUBLIC_URL}/blog-details`}
                     component={BlogDetailsPage}
                  />
                  <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={ContactPage} />
               </InnerPageLayout>
            </Switch>
         </BrowserRouter>
      </Provider>
   );
}

export default Root;

ReactDOM.render(
   <React.StrictMode>
      <Root />
   </React.StrictMode>,
   document.getElementById("root")
);
