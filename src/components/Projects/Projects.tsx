import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projetos">
      <div className="container">
        <h2>Projetos Eletrônicos</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="/src/assets/images/1000251521.png" alt="Projeto de automação" />
            </div>
            <h3>Automação Residencial</h3>
            <p>Sistema completo de automação para residências inteligentes.</p>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="/src/assets/images/1000251521.png" alt="Projeto de monitoramento" />
            </div>
            <h3>Monitoramento Remoto</h3>
            <p>Solução de monitoramento à distância para equipamentos industriais.</p>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="/src/assets/images/1000251521.png" alt="Projeto de eficiência energética" />
            </div>
            <h3>Eficiência Energética</h3>
            <p>Projeto para redução de consumo e otimização energética.</p>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="/src/assets/images/1000251521.png" alt="Projeto de IoT" />
            </div>
            <h3>Internet das Coisas (IoT)</h3>
            <p>Desenvolvimento de dispositivos conectados para aplicações diversas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
