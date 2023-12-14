import React from "react";
import Nav from "./Nav";
import "../index.css";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header class="flex-row px-1">
          <div>
            <h1>Josh Bowen - Portfolio</h1>
          </div>
          <div style={{marginLeft: 'auto'}}>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">

          <h2>Welcome</h2>
          <p>
            This is the portfolio of Josh Bowen. It is built as a demonstration of his React skills. Take a look around!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;