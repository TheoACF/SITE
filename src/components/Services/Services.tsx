import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <h2>Serviços Realizados</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <img src="/src/assets/images/service1.jpg" alt="Instalação elétrica" />
            </div>
            <h3>Instalação Elétrica</h3>
            <p>Serviços completos de instalação elétrica residencial e comercial com qualidade e segurança.</p>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src="/src/assets/images/service2.jpg" alt="Manutenção" />
            </div>
            <h3>Manutenção</h3>
            <p>Manutenção preventiva e corretiva em sistemas elétricos e eletrônicos.</p>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src="/src/assets/images/service3.jpg" alt="Automação" />
            </div>
            <h3>Automação</h3>
            <p>Soluções de automação residencial e industrial para maior eficiência e conforto.</p>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src="/src/assets/images/service4.jpg" alt="Projetos Eletrônicos" />
            </div>
            <h3>Projetos Eletrônicos</h3>
            <p>Desenvolvimento de projetos eletrônicos personalizados para diversas aplicações.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
