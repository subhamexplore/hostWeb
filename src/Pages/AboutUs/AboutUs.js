import React from "react";
import "./style.scss";
import Group from "../../Assets/Images/Group-7488.png";

const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-topBox">
        <img src={Group} alt="" />
      </div>
      <div className="aboutUs-topCenteredBox">
        <h1>About Us</h1>
        <div className="aboutUs-text">
          <p> texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          </p>
        </div>
        <div className="aboutUs-centeredBox">
          <div className="aboutUs-b box1"></div>
          <div className="aboutUs-b box2"></div>
          <div className="aboutUs-b box3"></div>
          <div className="aboutUs-b box4"></div>
        </div>
        <div className="aboutUs-text">
        <p> texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
           texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
         </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
