import React from "react";
import "../Industry/industry.css";
import img1 from "../../assets/Picture2b 1.png";
import img2 from "../../assets/Picture20 1.png";
import img3 from "../../assets/Picture21 1.png";
import img4 from "../../assets/Picture23 1.png";
import img5 from "../../assets/Picture24 1.png";
import img6 from "../../assets/Picture25 1.png";
import img7 from "../../assets/Picture26 1.png";
import img8 from "../../assets/Picture27 1.png";
import img9 from "../../assets/Picture28 1.png";
import img10 from "../../assets/Picture29 1.png";
import img11 from "../../assets/Picture30 1.png";
import img12 from "../../assets/Picture31 1.png";




function Industry() {
  return (
    <div className="industry">
      <div className="industry-section container">
        <div className="in-upper">
          <div className="in-upper-left">
            <img src={img1} alt="" />
          </div>
          <div className="in-upper-right">
            <p className="in-upper-right-big">
              Real outcomes and expert insights <br />A better way to buy IT
            </p>
            <p className="in-upper-right-small">
              Blue Dot Global is making a strong mark in the distribution of
              digital and electronic products, technological transformations,
              and system Integrations which started from the UAE and now
              expanded to supplying our product ranges in the Middle East,
              Africa, Asia, and Europe. <br /> <br />
              <br />
              We simplify and streamline your technology procurement processes.
              We’ve made buying the tech you need easier than ever. Your
              ingenuity is what turns imagination into innovation. We give you
              access to the components you need to breathe life into your
              vision. <br />
              <br />
              <br />
              We work with you with a deep-level understanding of your business
              needs, extensive technical knowledge, and highly capable delivery
              teams.
            </p>
          </div>
        </div>
        <div className="in-lower">
          <div className="in-lower-left">
            <p className="in-lower-left-big">
              Industry <br /> expertise
            </p>
            <p className="in-lower-left-small">
              We are one the leading business and technology consultancy and
              implementation experts building bridges between its clients'
              business goals and ecological capabilities
            </p>
          </div>
          <div className="in-lower-right">
            <div className="in-lower-right-icon">
              <img src={img2} alt="" />
              <p>Utilities</p>
            </div>
            <div className="in-lower-right-icon">
              <img src={img3} alt="" />
              <p>Manufacturing </p>
            </div>
            <div className="in-lower-right-icon">
              <img src={img4} alt="" />
              <p>Education</p>
            </div>
            <div className="in-lower-right-icon">
              <img src={img5} alt="" />
              <p>Logistics</p>
            </div>
            <div className="in-lower-right-icon">
              <img src={img6} alt="" />
              <p>Hospitality</p>
            </div>
            <div className="in-lower-right-icon">
              <img src={img7} alt="" />
              <p>Engineering</p>
            </div>
            <div className="in-lower-right-icon">
              <img src={img8} alt="" />
              <p>Telecom</p>
            </div>
            <div className="in-lower-right-icon">
              <img src={img9} alt="" />
              <p>Healthcare</p>
            </div>
            <div className="in-lower-right-icon">
              <img src={img10} alt="" />
              <p>Finance</p>
            </div>
            <div className="in-lower-right-icon">
              <img src={img11} alt="" />
              <p>Technology</p>
            </div>
            <div className="in-lower-right-icon">
              <img src={img12} alt="" />
              <p>Real Estate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industry;
