import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <h2>Made by J Bowen</h2>
      <p>
        <ul>
          <a href="https://github.com/JBowen96">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/joshua-bowen-2568101a3/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          
        </ul>
      </p>
    </footer>
  );
}

export default Footer;