import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials" id="clientes">
      <div className="container">
        <h2>Clientes</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">
              Pessoa muito atenciosa e consciente da responsabilidade de nossos serviços.
            </p>
            <p className="testimonial-location">Recife, PE</p>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">
              Excelente profissional, entregou o projeto dentro do prazo e com qualidade excepcional.
            </p>
            <p className="testimonial-location">Recife, PE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
