import React from "react";
import "./Achievements.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Achievement_image from "../../Assets/images/Achievement-image.png";
import Achievement_logo from "../../Assets/images/achievement-logo.png";

const Achievement = () => {
  const achievement_data = [
    {
      img: Achievement_image,
      logo: Achievement_logo,
      source: "Google Summer of Code",
      description:
        "4 students were in the semifinal of E-yantra Robotics Competition organized by IIT Bombay",
      duration: "2017 - 2018",
    },
    {
      img: Achievement_image,
      logo: Achievement_logo,
      source: "Google Summer of Code",
      description:
        "4 students were in the semifinal of E-yantra Robotics Competition organized by IIT Bombay",
      duration: "2017 - 2018",
    },
    {
      img: Achievement_image,
      logo: Achievement_logo,
      source: "Google Summer of Code",
      description:
        "4 students were in the semifinal of E-yantra Robotics Competition organized by IIT Bombay",
      duration: "2017 - 2018",
    },
    {
      img: Achievement_image,
      logo: Achievement_logo,
      source: "Google Summer of Code",
      description:
        "4 students were in the semifinal of E-yantra Robotics Competition organized by IIT Bombay",
      duration: "2017 - 2018",
    },
  ];
  return (
    <div className="Achievement-section">
      <div className="achievement-img">
        <h1 className="achievement-heading">Achievements</h1>
      </div>

      <div className="middle">
        <div className="search">
          <div className="search-bar">
            <SearchOutlinedIcon className="search-icon" />
            <p className="search-text">Search for any achievement</p>
          </div>
          <button className="search-button"> Search </button>
        </div>
        <div className="filter">
          <p>Filter</p>
          <FilterAltOutlinedIcon />
        </div>
      </div>

      {achievement_data.map((value, index) => (
        <div className="achievement-cards" key={index}>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            className="radio-button"
          />
          <img src={value.img} className="achievement-image" alt="" />
          <div className="achievement-details">
            <div className="achievement-name">
              <img src={value.logo} className="achievement-logo" alt="" />
              <p style={{ color: "rgba(71, 84, 103, 1)", marginLeft: "5px" }}>
                {value.source}
              </p>
            </div>
            <p style={{ margin: "8px 0", fontSize: "18px" }} className="value_desc">
              {value.description}
            </p>
            <p style={{ color: "rgba(152, 162, 179, 1)" }}>{value.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
