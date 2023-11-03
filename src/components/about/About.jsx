import React from "react";
import Image from "../../assets/avatar-2.svg";
import "./about.css";
import AboutBox from "./AboutBox";


const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Sobre mi</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Soy Sara, desarrolladora en Madrid, España. Tengo alto
              interés en desarrollo y diseño de aplicaciones multiplatadorma.
              Actualmente estoy aprendiendo Kotlin, y tengo experiencia
              profesional en BBDD, diseño y fotografía.
            </p>
            <a href="/CV_SaraArdila_2023.pdf" className="btn" download>
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Desarrollo</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Diseño</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Fotografía</h3>
                <span className="skills__number">95%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/*  <AboutBox /> */} {/* esta parte es la de los iconos debajo del sobremi */}
    </section>
  );
};

export default About;
