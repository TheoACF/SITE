import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>ENGENHARIA ELÉTRICA & PROJETOS INTELIGENTES</h1>
        <p>Instalações, Manutenções e Soluções em Eletrônica com Qualidade e Responsabilidade</p>
        <a href="#contato" className="cta-button">AGENDE UMA VISITA</a>
        <div className="contact-icons">
          <a href="tel:+5500000000000" className="icon-phone">
            <div className="icon-circle">
              <i className="phone-icon"></i>
            </div>
          </a>
          <a href="#contato" className="icon-calendar">
            <div className="icon-circle">
              <i className="calendar-icon"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
