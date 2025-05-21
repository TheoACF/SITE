import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    bairro: '',
    tipoServico: '',
    descricao: '',
    data: '',
    horario: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    alert('Agendamento enviado com sucesso!');
    // Limpar formulário após envio
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      bairro: '',
      tipoServico: '',
      descricao: '',
      data: '',
      horario: ''
    });
  };

  return (
    <section className="contact-form" id="contato">
      <div className="container">
        <div className="form-container">
          <div className="form-header">
            <h2>Agende uma visita</h2>
            <button className="close-button">×</button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="+55 00 00000-0000"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">E-mail (opcional)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="bairro">Bairro</label>
              <select
                id="bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
                required
              >
                <option value="">Selecione o bairro</option>
                <option value="Boa Viagem">Boa Viagem</option>
                <option value="Pina">Pina</option>
                <option value="Imbiribeira">Imbiribeira</option>
                <option value="Boa Vista">Boa Vista</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="tipoServico">Tipo de serviço</label>
              <input
                type="text"
                id="tipoServico"
                name="tipoServico"
                value={formData.tipoServico}
                onChange={handleChange}
                placeholder="Ex: Instalação elétrica"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="descricao">Breve descrição do problema</label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                placeholder="Descreva brevemente o serviço necessário"
                required
              />
            </div>
            
            <div className="form-group date-time">
              <div className="date-field">
                <label htmlFor="data">Data preferida</label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="time-field">
                <label htmlFor="horario">Horário</label>
                <input
                  type="time"
                  id="horario"
                  name="horario"
                  value={formData.horario}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="submit-button">Agendar</button>
          </form>
          
          <div className="form-illustration">
            <img src="/src/assets/images/1000251533.png" alt="Ilustração de técnico" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
