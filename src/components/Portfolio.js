import React from "react";
import homeBrewImage from "../../assets/small/HomeBrew.png";
import summerPunchImage from "../../assets/small/Summer_Punch.png";
import weatherDashImage from "../../assets/small/Weather_Dash.png";
import noteTakerImage from "../../assets/small/NoteTaker.png";
import twilightImage from "../../assets/small/Twilight_Ristorante.png";
import flowerImage from "../../assets/small/Sweet-Pea-Flowers.png";
import sphereImage from "../../assets/small/Sphere.png";

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
              <a href="https://lemming97.github.io/Sweet-Pea-Flowers/">
                {" "}
                <img
                  src={sphereImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Sweet-Pea-Flowers"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Sorcerer's Sphere</h4>
              <p>
                A MERN application that lets the user log in and create an
                account. The user can receive daily affirmations. The user also
                has the ability to ask questions to receive an answer. The user
                also can receive a lucky number if they want. The user can
                donate money to the website if they want to.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;