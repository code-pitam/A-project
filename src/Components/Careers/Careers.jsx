import React from "react";
import "../Careers/careers.css";
import img1  from "../../assets/aaa 1 (1).png";

function Careers() {
  return (
    <div className="careers" id="careers">
      <div className="careers-section">
        <div className="careers-left">
          <img src={img1} alt="" srcset="" />
        </div>
        <div className="careers-right">
          <p className="c-right-heading">careers</p>
          <p className="c-right-sub-h">Are you interested to Join Us ?</p>
          <p className="c-right-text">
            Are you excited about the career possibilities at Blue Dot Global
            Trading? <br />
            We’re always looking for bright minds and passionate individuals to
            join our journey. Stay connected for the job openings at Blue Dot
            and be part of the team that’s shaping the future of technology
            products and services, or you can also send your CV
            to info@bluedotglobal.com Your future starts here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Careers;
