import React from "react";
import moderngeo from "../assets/Modern-geo.PNG";
import snaptoit from "../assets/Snap-to-it.png";
import jate from "../assets/JATE.png";
import drinkologist from "../assets/Drinkologist.png";
import weatherfinder from "../assets/Weather-Finder.png"
import socailapi from "../assets/Social-API.png"


function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://modern-geo.net/">
                {" "}
                <img
                  src={moderngeo}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Modern-geo"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Modern Geo</h4>
              <p>
                Modern geo is a Geospatial company that I designed and created the website for. The website was built using GoDaddy (as requested by the company). Tools like this are useful for building small business sites at a fraction of the cost.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/JBowen96/Snap-To-It">
                {" "}
                <img
                  src={snaptoit}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Snap-to-it"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Snap To It</h4>
              <p>
                Snap To It is a Trello-like website for placing tasks in a Kanban style board. The app allows users to create an account, then create to-do cards which can be moved to in-work and complete columns.
              </p>
            </div>
          </div>
        </div>
        
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/JBowen96/Text-Editor">
                {" "}
                <img
                  src={jate}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="just-another-text-editor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Just Another Text Editor</h4>
              <p>
                Just Another Text Editor (J.A.T.E) is a Progressive Web Application that allows for a user to take notes in browser, with or without internet, and to run from the local and obtain the same notes.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Michaelepigott/Group-Project-8-25">
                {" "}
                <img
                  src={drinkologist}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="drinkologist"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Drinkologist</h4>
              <p>
                Drinkologist is an API based website that utilizes two different Web APIs to obtain a random recipie based on the ingredients provided from the user. Care was taken to assure that differences in the APIs' data was avoided using various loops.
              </p>
            </div>
          </div>
        </div>
        
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/JBowen96/Weather-Finder">
                {" "}
                <img
                  src={weatherfinder}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="weather-finder"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather-Finder</h4>
              <p>
                Weather Finder was one of my first experiences utilizing a Web API. Users are able to obtain a 5-day forecast for the city based on an input city. The information remained persistant regardless of reloads or closing the site.
              </p>
            </div>
          </div>
        </div>
        
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/JBowen96/Social-Networking-API">
                {" "}
                <img
                  src={socailapi}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Social-API"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Social API</h4>
              <p>
                While not a functional website, this serves as a knowledge set of working within MongoDB. The GitHub shows a preview of the backend workings using Post, Get, Put, and Del functions within Insomnia. The database mimics that on a social networking site's.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;