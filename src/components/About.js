import React from "react";
import profileImage from "../assets/Fallout_Avatar - Copy.jpg";
import "../index.css";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <div>
            <p>
              Howdy! My name is Josh, and I like maps! My love of maps led me to
              find a career in Geographic Information Systems with a BS in
              Environmental Science, an MA in Geography and Planning,
              certifications in GIScience and City Planning, and until now a
              happy career manipulating the data of the world around us.
            </p>
            <br></br>
            <p>
              Unfortunately, as many things go in life, I have lost the joy in
              this field that I once held. I have found a new love in coding,
              and digital creation. I enjoy the aspects of Web Development that
              allow for a creator to make inputs and see the changes right in
              front of them; it's great! I want to move my career into the field
              of Web Development, hoping to find a fantastic company and
              revitalize my love of my career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
