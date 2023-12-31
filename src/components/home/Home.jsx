import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-bueno2.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
   <section className="home container" id="home">

    <div className="intro">

      <img src={Me} alt="" className="home__img" />

      <h1 className="home__name">Sara Ardila</h1>
      <span className="home__education">¡Hola! Soy desarrolladora de software</span>

      <HeaderSocials />

      <a href="#contact" className="btn">Contáctame</a>

      <ScrollDown />

    </div>

     <Shapes/>
   </section>
  )
}

export default Home