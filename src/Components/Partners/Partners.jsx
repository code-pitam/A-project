import React from 'react'
import "../Partners/partners.css"
import img1 from "../../assets/Picture35 1.png";

import img2 from "../../assets/Picture36 1.png";
import img3 from "../../assets/Picture37 1 (1).png";

import img4 from "../../assets/Picture38 1.png";
import img5 from "../../assets/Picture39 1 (1).png";
import img6 from "../../assets/Picture40 1.png";



function Partners() {
  return (
    <div className="partners">
      <div className="partners-section">
        <p className="partners-heading">Partners</p>
        <div className="partners-icon">
          <img src={img1} alt="" />
          <img src={img2} alt="" />

          <img src={img3} alt="" />

          <img src={img4} alt="" />

          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Partners