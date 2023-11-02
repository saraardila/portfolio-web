import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 2,
    image: Image2,
    title: "Programación",
    description:
      "Grado superior en Desarrollo de Aplicaciones Multiplataforma.",
  },
  {
    id: 1,
    image: Image1,
    title: "Diseño",
    description:
      "Master en Diseño Gráfico y Pintura Digital.",
  },
  {
    id: 3,
    image: Image3,
    title: "Fotografía",
    description:
      "Grado superior en Iluminación, Captación y tratamiento de la imagen.",
  },
];


const Services = () => {
  return ( 
  <section className="services container section" id="services">

  <h2 className="section__title">Conocimientos</h2>

  <div className="services__container grid">
    {data.map(({id, image, title, description})=>{ //-- recorremos el array

      return ( //--> recuperamos la info para pintarla

        <div className="services__card" key={id}>
          <img src={image} alt="" className="services__img" />
          <h3 className="services__title">{title}</h3>
          <p className="services__description">{description}</p>

        </div>
      )
    })}
  </div>

  </section>);

};

export default Services