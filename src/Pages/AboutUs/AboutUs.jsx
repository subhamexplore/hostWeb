import React from "react";
import "./AboutUs.scss";
import Group from "../../Assets/images/zairza_group.png";

const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-topBox">
        <img src={Group} alt="" />
      </div>
      <div className="aboutUs-topCenteredBox">
        <h1>About Us</h1>
        <div className="aboutUs-text">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad deserunt illum, laudantium dignissimos alias id! Et quia animi quod repudiandae. Ipsum, suscipit consectetur magni accusantium fugit iusto nobis accusamus officia at reprehenderit incidunt nihil, expedita rerum harum optio. Ad voluptatibus rerum totam ipsa optio explicabo veniam consequuntur deserunt ut veritatis.
          </p>
        </div>
        <div className="aboutUs-centeredBox">
          <div className="aboutUs-b box1"></div>
          <div className="aboutUs-b box2"></div>
          <div className="aboutUs-b box3"></div>
          <div className="aboutUs-b box4"></div>
        </div>
        <div className="aboutUs-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, a? Sit necessitatibus deleniti modi. Sapiente tempore atque labore laborum, voluptatibus porro odit quaerat ut ex distinctio ab voluptate a dicta culpa vitae aliquam eos corporis deleniti harum aspernatur laboriosam soluta. Officiis veniam architecto impedit est libero. Tenetur quis corporis delectus provident recusandae sit voluptas labore earum quae fugiat repellat, ipsum velit sint reprehenderit consectetur sequi, nesciunt iusto! Impedit eum blanditiis aspernatur beatae nostrum corrupti sint ea ipsa culpa iusto. Odio quos quas numquam sint quod. Doloremque, neque obcaecati voluptates ex tempore, aliquam et nostrum eveniet quisquam soluta reiciendis ipsa optio quod deserunt blanditiis quo, necessitatibus aspernatur totam eaque? Eum et assumenda, cum aliquam quidem molestias maxime, sit, eaque voluptatum placeat nulla corrupti culpa blanditiis ducimus ad eveniet illo laudantium recusandae fugit totam? Quibusdam, asperiores illo. Dolor ipsa placeat quia, voluptas libero officiis earum minima ad veritatis? Dolores cum, porro pariatur quod facere maxime, dignissimos ratione numquam labore eos rem magnam?
         </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
