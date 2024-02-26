import React from "react";
import "../Services/services.css";
import img1 from "../../assets/Picture3 1.png";

import img2 from "../../assets/Picture4 1.png";
import img3 from "../../assets/Picture5 1.png";
import img4 from "../../assets/Picture6 1.png";
import img5 from "../../assets/Picture7 1.png";
import img6 from "../../assets/Picture8 1.png";
import img7 from "../../assets/Picture9 1.png";
import img8 from "../../assets/Picture10 1.png";
import img9 from "../../assets/Picture11 1.png";
import img10 from "../../assets/Picture12 1.png";
import img11 from "../../assets/Picture14 1.png";
import img12 from "../../assets/Picture15 1.png";
import img13 from "../../assets/Picture16 1.png";
import img14 from "../../assets/Picture17 1.png";
import img15 from "../../assets/XMLID_15_.png";

function Services() {
  return (
    <div className="service-main" id="services">
      <div className="service-section container">
        <div className="left-section">
          <div className="upper-section">
            <div className="inner-left">
              <p className="big-font">
                We connect people <br /> with technology that <br /> makes life
                better
              </p>
              <p className="small-font">
                Discover how we help you achieve your strategic goals. We
                combine power of people and technology to address your biggest
                opportunities - from improving client experience <br /> and
                incresaing effeciency to growing revenue
              </p>
            </div>
            <div className="inner-right">
              <div className="global">
                <p>Global Coverage</p>
                <img src={img1} alt="" />
              </div>
              <div className="inter">
                <p>International offices</p>
                <div className="inter-lower">
                  <p>UAE</p>
                  <p>India</p>
                  <p>Pakistan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-section">
            <div className="product">
              <p className="">Product Specialization</p>
            </div>
            <div className="lower-icon">
              <div className="icon">
                <img src={img2} alt="" />
                <p>Laptops</p>
              </div>
              <div className="icon">
                <img src={img3} alt="" />
                <p>Desktops</p>
              </div>
              <div className="icon">
                <img src={img4} alt="" />
                <p>Servers</p>
              </div>
              <div className="icon">
                <img src={img5} alt="" />
                <p>Networking</p>
              </div>
              <div className="icon">
                <img src={img6} alt="" />
                <p>Components</p>
              </div>
              <div className="icon">
                <img src={img7} alt="" />
                <p>Audio Visual</p>
              </div>
              <div className="icon">
                <img src={img8} alt="" />
                <p>IT Accessories</p>
              </div>
              <div className="icon">
                <img src={img9} alt="" />
                <p>Security</p>
              </div>
              <div className="icon">
                <img src={img10} alt="" />
                <p>CCTV</p>
              </div>
              <div className="icon">
                <img src={img11} alt="" />
                <p>Storage</p>
              </div>
              <div className="icon">
                <img src={img12} alt="" />
                <p>Accessories</p>
              </div>
              <div className="icon">
                <img src={img13} alt="" />
                <p>Print Solutions</p>
              </div>
              <div className="icon">
                <img src={img14} alt="" />
                <p>Softwares</p>
              </div>
              <div className="icon">
                <img src={img15} alt="" />
                <p>POS Systems</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <p className="right-ss">Service Specialization</p>
          <div className="right-inner">
            <p>IT Hardware & Software Support</p>
            <p>Software & Licensing Support</p>
            <p>Project Management</p>
            <p>AMC Support</p>
            <p>Onsite Engineer Services</p>
            <p>Technology infrastructure</p>
            <p>Repair & Maintenance</p>
            <p>End-to-End IT Services</p>
            <p>Server Management</p>
            <p>Storage Solutions</p>
            <p>Enterprise Cloud Services</p>
            <p>Networking & Communications</p>
            <p>AV and Meeting Room Support</p>
            <p>Data / IT Disaster Recovery</p>
            <p>Cloud Security Solutions</p>
            <p>Post Warranty Services</p>
            <p>Remote Support Services</p>
            <p>Web & App Designing & Development</p>
            <p>CRM Development</p>
            <p>E-commerce Platform development</p>
            <p>Digital Marketing Services</p>
            <p>Social Media Management</p>
            <p>Content Creation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
