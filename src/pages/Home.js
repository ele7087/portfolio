import React from "react";
import "./Home.css";
import ParallaxComponent from "../components/Parallax";

function Home() {
  return (
    <div className="splashPage">
      <ParallaxComponent />
      <div className="contactSection">
        <div className="contactHeader">
          <h1>Contact Info</h1>
        </div>
        <div className="contactInfo">
          <div className="textBox">
            <p>
              Email:{" "}
              <a className="links" href="mailto:sfobri@gmail.com">
                sfobri@gmail.com
              </a>
            </p>
          </div>
          <div className="textBox">
            <a className="links" href="http://www.google.ca">
              <p>Resume</p>
            </a>
          </div>
          <div className="textBox">
            <p>Skype: Brian Lui</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
