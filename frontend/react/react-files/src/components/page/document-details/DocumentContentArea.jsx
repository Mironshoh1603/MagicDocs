import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

function DocumentContentArea() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    <div className="col-lg-6 order-lg-2 order-3">
      <h3 className="document-title mb-70">
        Need support for checkout page, default state is selected
      </h3>
      <div className="document-middle-area">
        {/* introduction-item */}
        <div className="document-item">
          <div className="doc-item-title">
            <img src={process.env.PUBLIC_URL + "/images/icons/arrow.svg"} alt="docIMG" />
            <h4>Introduction</h4>
          </div>
          <p className="para-font">
            First of all, Thank you so much for purchasing this template and
            for being my loyal customer. You are awesome!. You are entitled
            to get free lifetime updates to this product + exceptional
            support from the author directly.
          </p>
          <p className="para-font">
            Etiam rhoncus lacus consequat, euismod leo et, efficitur odio.
            Nam pulvinar neque eget mollis tempor. Integer augue lacus,
            egestas vel justo non, consequat pellentesque sem. Donec
            suscipit erat ut ante pharetra, sit amet venenatis lectus
            pharetra. Donec a rutrum purus. Integer ac leo non lorem
            tristique sollicitudin.
          </p>
          <ul className="doc-item-list">
            <li>Item Name:</li>
            <li>Item Version :</li>
            <li>Author Name:</li>
            <li>License :</li>
          </ul>
          <p className="para-font">
            <span className="point-highlight">Etiam rhoncus :</span> lacus
            consequat, euismod leo et, efficitur odio. Nam pulvinar neque
            eget mollis tempor. Integer augue lacus, egestas vel justo non,
            consequat pellentesque sem. Donec suscipit erat ut ante
            pharetra, sit amet venenatis lectus pharetra. Donec a rutrum
            purus. Integer ac leo non lorem tristique sollicitudin.
          </p>
        </div>
        {/* feature-item */}
        <div className="document-item" id="featuers">
          <div className="doc-item-title">
            <img src={process.env.PUBLIC_URL + "/images/icons/arrow.svg"} alt="docIMG" />
            <h4>Full Features</h4>
          </div>
          <ul className="doc-item-list mb-0">
            <li>2 Unique Home Pages and Unique Inner Pages</li>
            <li>Multi-Purpose Design</li>
            <li>Build with Bootstrap v5 and SCSS</li>
            <li>Unlimited variant image</li>
            <li>Modern &amp; Clean Design</li>
            <li>Sticky Header</li>
            <li>Smooth Scroll</li>
            <li>Google Fonts</li>
            <li>Fully Responsive to all devices</li>
            <li>Cross browser compatible</li>
            <li>Developer Friendly Coding</li>
            <li>Very Well Documented</li>
            <li>180+ Reusable Component Blocks</li>
            <li>Built with Latest React v17+</li>
            <li>React Hooks</li>
            <li>Free Updates</li>
          </ul>
        </div>
        {/* React Features */}
        <div className="document-item">
          <div className="doc-item-title">
            <img src={process.env.PUBLIC_URL + "/images/icons/arrow.svg"} alt="docIMG" />
            <h4>React Features</h4>
          </div>
          <ul className="doc-item-list mb-0">
            <li>JSX</li>
            <li>React Hooks</li>
            <li>Components</li>
            <li>Data Binding</li>
            <li>Virtual DOM</li>
            <li>Simplicity</li>
            <li>Performance</li>
          </ul>
        </div>
        {/* HTML Structure */}
        <div className="document-item" id="htmlstructure">
          <div className="doc-item-title">
            <img src={process.env.PUBLIC_URL + "/images/icons/arrow.svg"} alt="docIMG" />
            <h4>HTML Structure</h4>
          </div>
          <div className="code-box">
            <pre>
              {"\t"}
              {"\t"}
              <code>
                {"\n"}
                {"\t"}&lt;!doctype html&gt;{"\n"}
                {"\t"}&lt;html lang="en"&gt;{"\n"}
                {"\t"}&lt;head&gt;{"\n"}
                {"\t"}&lt;---Required meta tags ---&gt;{"\n"}
                {"\t"}&lt;meta charset="utf-8"&gt;{"\n"}
                {"\t"}&lt;meta name="viewport" content="width=device-width,
                initial-scale=1"&gt;{"\n"}
                {"\t"}&lt;---Bootstrap CSS ---&gt;{"\n"}
                {"\t"}&lt;link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"{" "}
                <br /> rel="stylesheet" <br />{" "}
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"{" "}
                <br /> crossorigin="anonymous"&gt;{"\n"}
                {"\t"}&lt;title&gt;Hello, world !&lt;/title&gt;{"\n"}
                {"\t"}&lt;/head&gt;{"\n"}
                {"\t"}&lt;/html&gt;{"\n"}
                {"\t"}
                {"\t"}
              </code>
              {"\n"}
              {"\t"}
            </pre>
          </div>
          <p className="para-font">
            If you would like to edit the color, font, or style of any
            elements in one of these columns, you would do the following :
          </p>
          <div className="change-code-area">
            .text-contain h3 {"{"} color: #some_color; {"}"}
          </div>
          <p className="para-font">
            If you find that your new style is not overriding, it is most
            likely because of a specificity problem. Scroll down in your CSS
            file and make sure that there isn’t a similar style that has
            more weight.
          </p>
          <div className="change-code-area">
            .service-area .text-contain h3 {"{"} color: #some_color; {"}"}
          </div>
          <p className="para-font">
            So, to ensure that your new styles are applied, make sure that
            they carry enough “weight” and that there isn’t a style lower in
            the CSS file that is being applied after yours.
          </p>
        </div>
        {/* CSS Files and Structure  */}
        <div className="document-item" id="csstructure">
          <div className="doc-item-title">
            <img src={process.env.PUBLIC_URL + "/images/icons/arrow.svg"} alt="docIMG" />
            <h4>CSS Files and Structure </h4>
          </div>
          <h6 className="doc-item-subtitle">
            This theme imports many Css files:
          </h6>
          <ul className="doc-item-list">
            <li>jquery.fancybox.min.css</li>
            <li>jquery-ui.css</li>
            <li>swiper.css</li>
            <li>flaticon.css</li>
            <li>bootstrap-icons.css</li>
            <li>bootstrap.min.css</li>
            <li>style.css</li>
            <li>responsive.css</li>
          </ul>
          <p className="para-font">
            Proin turpis sapien, accumsan nec aliquam at, laoreet id erat.
            Pellentesque id consequat neque. Viva mus eget nunc porta,
            fringilla ex in, vestibulum mi. Donec sit amet turpis eget ex
            luctus laoreet. Nullam quis lacus ipsum. Nullam in congue
            libero.
          </p>
          <p className="para-font">
            The second file contains all of the specific stylings for the
            page. The file is separated into sections using
          </p>
          <div className="code-box">
            <pre>
              {"\t"}
              {"\t"}
              <code>
                {"\n"}
                {"\t"} *=========================== 1. Global CSS <br />{" "}
                ============================*{"\n"}
                {"\n"}
                {"\t"}some code{"\n"}
                {"\n"}
                {"\t"}*=========================== 2.Bootstrap CSS <br />{" "}
                ============================*{"\n"}
                {"\n"}
                {"\t"}some code{"\n"}
                {"\n"}
                {"\t"}*=========================== 3.Top Bar CSS <br />{" "}
                ============================*{"\n"}
                {"\n"}
                {"\t"}some code, etc.{"\n"}
                {"\t"}
                {"\t"}
              </code>
              {"\n"}
              {"\t"}
            </pre>
          </div>
          <p className="para-font">
            If you would like to edit a specific section of the site, simply
            find the appropriate label in the CSS file, and then scroll down
            until you find the appropriate style that needs to be edited.
          </p>
        </div>
        {/* javascript  */}
        <div className="document-item" id="jstructure">
          <div className="doc-item-title">
            <img src={process.env.PUBLIC_URL + "/images/icons/arrow.svg"} alt="docIMG" />
            <h4>JavaScript</h4>
          </div>
          <h6 className="doc-item-subtitle">
            This theme imports many Javascript files and TypeScript Files:
          </h6>
          <ul className="doc-item-list">
            <li>jquery-3.6.0.min.js</li>
            <li>bootstrap.bundle.min.js</li>
            <li>jquery-ui.min.js</li>
            <li>popper.min.js</li>
            <li>swiper.js</li>
            <li>jquery.fancybox.min.js</li>
          </ul>
          <div className="code-box">
            <pre>
              {"\t"}
              {"\t"}
              <code>
                {"\n"}
                {"\t"}/==== Loading Page ==== /{"\n"}
                {"\t"}$(window).on('load', function () {"{"}
                {"\n"}
                {"\t"}
                {"\t"}'use strict';{"\n"}
                {"\t"}
                {"\t"}$('body .loading-screen').fadeOut(1000);{"\n"}
                {"\t"}
                {"\t"}$('html').css('overflow-y', 'visible');{"\n"}
                {"\t"}
                {"}"}); // This function is used to hide the loading section
                {"\n"}
                {"\t"}
                {"\t"}
              </code>
              {"\n"}
              {"\t"}
            </pre>
          </div>
          <p className="para-font">
            JavaScript Most of the animation in this site is carried out
            from the customs scripts. There are a few functions worth
            looking over.
          </p>
        </div>
        {/* Sources and Credits */}
        <div className="document-item" id="source-credits">
          <div className="doc-item-title">
            <img src={process.env.PUBLIC_URL + "/images/icons/arrow.svg"} alt="docIMG" />
            <h4>Sources and Credits</h4>
          </div>
          <p className="para-font">
            I’ve used the following images, icons or other files as listed :
          </p>
          <h6 className="doc-item-subtitle mt-4" id="source-img">
            01. Images{" "}
          </h6>
          <ul className="doc-item-list">
            <li>SRC 1: https://www.pexels.com/</li>
            <li>SRC 2: http://www.freepik.com/</li>
          </ul>
          <h6 className="doc-item-subtitle" id="source-css">
            02. CSS Files
          </h6>
          <ul className="doc-item-list">
            <li>Bootstrap V5: https://getbootstrap.com/…</li>
            <li>Bootstrap icons: https://icons.getbootstrap.com</li>
            <li>Swiper: https://swiperjs.com/</li>
          </ul>
          <h6 className="doc-item-subtitle" id="source-js">
            03. JavaScript Files
          </h6>
          <ul className="doc-item-list">
            <li>bootstrap.min.js: https://getbootstrap.com/</li>
            <li>jquery-3.6.0.min.js: https://jquery.com/</li>
            <li>popper.js: https://popper.js.org/</li>
            <li>fancybox js: http://fancybox.net/</li>
            <li>Swiper js: http://fancybox.net/</li>
          </ul>
          <h6 className="doc-item-subtitle" id="source-fonts">
            04. Fonts
          </h6>
          <ul className="doc-item-list mb-0">
            <li>
              Maven+Pro: https://fonts.googleapis.com/css2?family=Maven+Pro
            </li>
            <li>
              Jost : https://fonts.googleapis.com/css2?family=Jost:ital
            </li>
          </ul>
        </div>
        {/* Image Hotspots Widget  */}
        <div className="document-item" id="imagehotspot">
          <div className="doc-item-title mb-4">
            <img src={process.env.PUBLIC_URL + "/images/icons/arrow.svg"} alt="docIMG" />
            <h4>Image Hotspots Widget</h4>
          </div>
          <div className="home-img text-center">
            <img src={process.env.PUBLIC_URL + "/images/bg/Image.jpg"} alt="documentsDetailsIMG" />
          </div>
        </div>
        {/* video Widget  */}
        <div className="document-item" id="videowidget">
          <div className="doc-item-title mb-4">
            <img src={process.env.PUBLIC_URL + "/images/icons/arrow.svg"} alt="docIMG" />
            <h4>Video Widget</h4>
          </div>
          <div className="details-video-wrap">
            <img className="w-100" src={process.env.PUBLIC_URL + "/images/bg/video-bgg.jpg"} alt="documentsDetailsIMG" />
            <div className="video-play" style={{ cursor: "pointer" }}>
              <div
                href=""
                className="popup-youtube video-icon"
                onClick={() => setOpen(true)} 
              >
                <i className="bx bx-play" />
              </div>
            </div>
            <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
          </div>
        </div>
        {/* FAQs */}
        <div className="document-item" id="faqs">
          <div className="doc-item-title">
            <img src={process.env.PUBLIC_URL + "/images/icons/arrow.svg"} alt="docIMG" />
            <h4>FAQs</h4>
          </div>
          <p className="para-font mb-3">
            Frequently asked questions and answers.
          </p>
          <h6 className="doc-item-subtitle">01. Articles</h6>
          <ul className="doc-item-list mb-30">
            <li>
              Maven+Pro: https://fonts.googleapis.com/css2?family=Maven+Pro
            </li>
            <li>
              Jost : https://fonts.googleapis.com/css2?family=Jost:ital
            </li>
          </ul>
          <div className="faq-wrap">
            <div className="faq-item">
              <h5
                id="heading10"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapse10"
                aria-controls="collapse10"
              >
                What thing and what area are covered in support
              </h5>
              <div
                id="collapse10"
                className="accordion-collapse collapse"
                aria-labelledby="heading10"
              >
                <div className="faq-body">
                  Morbi aliquam quis quam in luctus. Nullam tincidunt
                  pulvinar imperdiet. Sed varius, diam vitae posuere semper,
                  libero ex hendrerit nunc, ac sagittis eros metus ut diam.
                  Donec a nibh in libero maximus vehicula. Etiam sit amet
                  condimentum erat. Pellentesque ultrices sagittis turpis,
                  quis tempus ante viverra et.Morbi aliquam quis quam in
                  luctus. Nullam tincidunt pulvinar imperdiet. Sed varius,
                  diam vitae posuere semper, tincidunt pulvinar imperdiet.
                  Sed varius, diam vitae posuere semper.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <h5
                id="heading11"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapse11"
                aria-controls="collapse11"
              >
                What will happen if my support is expire after Purching my
                Item
              </h5>
              <div
                id="collapse11"
                className="accordion-collapse collapse"
                aria-labelledby="heading11"
              >
                <div className="faq-body">
                  Morbi aliquam quis quam in luctus. Nullam tincidunt
                  pulvinar imperdiet. Sed varius, diam vitae posuere semper,
                  libero ex hendrerit nunc, ac sagittis eros metus ut diam.
                  Donec a nibh in libero maximus vehicula. Etiam sit amet
                  condimentum erat. Pellentesque ultrices sagittis turpis,
                  quis tempus ante viverra et.Morbi aliquam quis quam in
                  luctus. Nullam tincidunt pulvinar imperdiet. Sed varius,
                  diam vitae posuere semper, tincidunt pulvinar imperdiet.
                  Sed varius, diam vitae posuere semper.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <h5
                id="heading12"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapse12"
                aria-controls="collapse12"
              >
                How does Deskotos differ from usual apps?
              </h5>
              <div
                id="collapse12"
                className="accordion-collapse collapse"
                aria-labelledby="heading12"
              >
                <div className="faq-body">
                  Morbi aliquam quis quam in luctus. Nullam tincidunt
                  pulvinar imperdiet. Sed varius, diam vitae posuere semper,
                  libero ex hendrerit nunc, ac sagittis eros metus ut diam.
                  Donec a nibh in libero maximus vehicula. Etiam sit amet
                  condimentum erat. Pellentesque ultrices sagittis turpis,
                  quis tempus ante viverra et.Morbi aliquam quis quam in
                  luctus. Nullam tincidunt pulvinar imperdiet. Sed varius,
                  diam vitae posuere semper, tincidunt pulvinar imperdiet.
                  Sed varius, diam vitae posuere semper.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <h5
                id="heading13"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapse13"
                aria-controls="collapse13"
              >
                More about early access?
              </h5>
              <div
                id="collapse13"
                className="accordion-collapse collapse"
                aria-labelledby="heading13"
              >
                <div className="faq-body">
                  Morbi aliquam quis quam in luctus. Nullam tincidunt
                  pulvinar imperdiet. Sed varius, diam vitae posuere semper,
                  libero ex hendrerit nunc, ac sagittis eros metus ut diam.
                  Donec a nibh in libero maximus vehicula. Etiam sit amet
                  condimentum erat. Pellentesque ultrices sagittis turpis,
                  quis tempus ante viverra et.Morbi aliquam quis quam in
                  luctus. Nullam tincidunt pulvinar imperdiet. Sed varius,
                  diam vitae posuere semper, tincidunt pulvinar imperdiet.
                  Sed varius, diam vitae posuere semper.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default DocumentContentArea