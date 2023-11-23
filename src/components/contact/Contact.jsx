import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);

  const enviarCorreo = async (e) => {
    e.preventDefault();

    // Validar campos obligatorios
    const name = e.target.from_name.value.trim();
    const email = e.target.from_email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      setFormStatus('emptyFields');
      return;
    }

    try {
      await emailjs.sendForm('service_ab7rs1t', 'template_015nfln', e.target, 'xWkr_2_KKbCzMPkAO');
      console.log('Correo enviado correctamente');
      setFormStatus('success');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setFormStatus('error');
    }

    // Reset the form after submission
    e.target.reset();
  };

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">
        Ponte en contacto
      </h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">¡Hablemos!</h3>
          <p className="contact__details">¿No te gustan los formularios? Envíame un correo electrónico: saraardila.contacto@gmail.com👋</p>
        </div>

        <form className="contact__form" onSubmit={enviarCorreo}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" name="from_name" placeholder='Ingresa tu nombre' />
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" name="from_email" placeholder='Ingresa tu correo electrónico' />
            </div>
          </div>

          <div className="contact__form-div">
            <input type="text" className="contact__form-input" name="input_subject" placeholder='Ingresa tu asunto' />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea name="message" cols="30" rows="10" className='contact__form-input' placeholder='Escribe tu mensaje'></textarea>
          </div>

          {formStatus === 'emptyFields' && <p style={{ color: 'red' }}>Por favor, completa todos los campos obligatorios</p>}
          {formStatus === 'success' && <p style={{ color: 'green' }}>Correo enviado correctamente</p>}
          {formStatus === 'error' && <p style={{ color: 'red' }}>Error al enviar el correo</p>}

          <button type="submit" className="btn">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;