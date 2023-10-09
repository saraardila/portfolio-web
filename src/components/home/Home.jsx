import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-5.svg";


const Home = () => {
  return (
   <section className="home container" id="home">

    <div className="intro">

      <img src={Me} alt="" className="home__img" />

      <h1 className="home__name">Sara Ardila</h1>
      <span className="home__education">I'm a mobile developer</span>

    </div>
   </section>
  )
}

export default Home