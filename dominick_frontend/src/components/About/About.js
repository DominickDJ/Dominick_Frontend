import React from "react";
import aboutImage from "../../images/aboutImage.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <img className="about__image" src={aboutImage} alt="Author" />
      <div className="about__section">
        <h1 className="about__title">About the Author</h1>
        <p className="about__paragraph">
          Hello! I am a passionate born again Christian who was raised in the
          captivating mountains of Montana, birthed in Sacramento, CA. My
          journey in culinary began in a family-owned restraunt where I gaines
          invaluable insights and have since been Managing multiple businesses
          as Head Chef. My hobbies include traveling, wake-boarding, skiing,
          online-gaming, and coding! I am now a Full-Stack Software Engineer
          with a strong command of HTML, CSS, JavaScript, React, and Backend
          Development. I'm always open to new experiences and ready to explore
          life's next challenge!
        </p>
        <p className="about__paragraph">
          Thanks for checking out my NewsExplorer application! Currently it is
          designed for testing. Feel free to create a mock account and try it
          out!
        </p>
      </div>
    </div>
  );
}
