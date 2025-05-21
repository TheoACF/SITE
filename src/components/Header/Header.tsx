import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
            <span className="logo-bracket">{'{'}</span>
            <span className="logo-bracket">{'}'}</span>
          </div>
          <h1>Thundertale</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#inicio">INÍCIO</a></li>
            <li><a href="#sobre">SOBRE MIM</a></li>
            <li><a href="#projetos">PROJETOS</a></li>
            <li><a href="#servicos">SERVIÇOS</a></li>
            <li><a href="#contato">CONTATO</a></li>
          </ul>
        </nav>
        <div className="mobile-menu-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
