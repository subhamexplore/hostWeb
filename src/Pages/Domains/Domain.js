import React from "react";
import "./Domain.scss";
import Logo from "../../Assets/images/zairza_logo.png";
import menu from "../../Assets/images/Hamburger Menu.png";
import Embedded_system from "../../Assets/images/Embedded-systems.png";
import Internet_of_things from "../../Assets/images/Internet-of-things.png";
import AI from "../../Assets/images/AI.png";
import ML from "../../Assets/images/ML.png";
import Robot_operating_system from "../../Assets/images/Robot-operating-system.png";
import Dev_ops from "../../Assets/images/Dev-ops.png";
import blockchain from "../../Assets/images/blockchain.png";
import cloud from "../../Assets/images/cloud.png";
import web_dev from "../../Assets/images/web-dev.png";
import App_dev from "../../Assets/images/App-dev.png";
import cyber_security from "../../Assets/images/cyber-security.png";
import web_application from "../../Assets/images/web-application.png";
import react_native from "../../Assets/images/react-native.png";
import game_dev from "../../Assets/images/game-dev.png";
import CP from "../../Assets/images/CP.png";
import design from "../../Assets/images/design.png";
import video_editing from "../../Assets/images/video-editing.png";

const Domain = () => {
  const data = [
    {
      image: Embedded_system,
      image_text: "Embedded Systems",
    },
    {
      image: Internet_of_things,
      image_text: "Internet Of Things",
    },
    {
      image: AI,
      image_text: "Artificial Intelligence",
    },
    {
      image: ML,
      image_text: "Machine Learning",
    },
    {
      image: Robot_operating_system,
      image_text: "Robot Operating System",
    },
    {
      image: Dev_ops,
      image_text: "Dev-Ops",
    },
    {
      image: blockchain,
      image_text: "Blockchain",
    },
    {
      image: cloud,
      image_text: "Cloud",
    },
    {
      image: web_dev,
      image_text: "Web Development",
    },
    {
      image: App_dev,
      image_text: "App Development",
    },
    {
      image: cyber_security,
      image_text: "Cyber Security",
    },
    {
      image: web_application,
      image_text: "Web Application",
    },
    {
      image: react_native,
      image_text: "React Native",
    },
    {
      image: game_dev,
      image_text: "Game Development",
    },
    {
      image: CP,
      image_text: "Competive Programming",
    },
    {
      image: design,
      image_text: "Design",
    },
    {
      image: video_editing,
      image_text: "Video Editing",
    },
  ];

  return (
    <div className="Domain-section">
      <div className="top">
        <img src={Logo} alt="" className="logo" />
        <img src={menu} alt="" className="burger" />
      </div>

      <h1 className="heading">
        Domains we cover
      </h1>
      
      <div className="domains">
      {data.map((value, index) => (
        <div
          className="domain"
          key={index}
          style={{
            height: "100px",
            width: "280px",
            borderRadius: "16px",
            backgroundImage: `url(${value.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {value.image_text}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Domain;
