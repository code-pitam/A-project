import React from "react";
import "../Hero/hero.css";

function Hero() {
  return (
    <div className="hero">
      <video
        src="src\assets\Video\New Trending SKY Blue Neon Effect Animation Logo Black Screen Video l Neon Light Effect l Kinemaster.mp4"
        autoPlay
        muted
        loop
        className="hero-video"
      ></video>
      <div className="container hero-section">
        <img className="logo" src="src\assets\Group 10.png" alt="" srcset="" />

        <div className="hero-inner">
          <div className="left-section">
            <ul>
              <li>
                <img src="src\assets\XMLID_15_ (2).png" alt="" />
                <p>About</p>
              </li>
              <li>
                <img src="src\assets\XMLID_15_ (2).png" alt="" />
                <p>About</p>
              </li>
            </ul>
          </div>
          <div className="right-section">
            <div className="quote-sec">
              <p>
                A leading technology and electronics goods merchant <br /> and
                wholesale distributor providing the latest solutions <br /> and
                services with exceptional partner experience to <br />{" "}
                resellers, retailers, corporate businesses, and <br />{" "}
                government entities
              </p>

              <button className="quote">GET YOUR QUOTE NOW</button>
            </div>
          </div>
        </div>
        <div className="hero-lower-section">
          <p>Connect with us</p>
          <div className="social-icon">
            <div className="social">
              <img src="src\assets\XMLID_15_ (3).png" alt="" srcset="" />
              <p>Instagram</p>
            </div>
            <div className="social">
              <img src="src\assets\XMLID_15_ (3).png" alt="" srcset="" />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
