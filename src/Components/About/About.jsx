import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla nihil
          tenetur dolor, laborum sapiente voluptate atque dolorum dolores ipsa,
          explicabo adipisci delectus eveniet eius saepe, magni rem quas optio
          accusamus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla nihil
          tenetur dolor. amet consectetur adipisicing elit. Nulla nihil
          tenetur dolor.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla nihil
          tenetur dolor, laborum sapiente voluptate atque dolorum dolores ipsa,
          explicabo adipisci delectus eveniet eius saepe, magni rem quas optio
          accusamus.
        </p>
      </div>
    </div>
  );
};

export default About;
