import React, { useState } from "react";
import hero from "../../assets/images/hero.jpg";
function Home(props) {
  return (
    <div>
      <header class="nav">
        <div></div>
      </header>
      <section class="container__hero">
        <img class="hero__img" src={hero} alt="Logo" />
        <div class="hero">
          <h1 class="hero__title">
            Hi There, I'm Joel
            <br /> I am a computer engineer
          </h1>
          <h4>I like to learn about technology to create a better future,</h4>
        </div>
      </section>
    </div>
  );
}

export default Home;
