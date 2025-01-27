// src/components/CepForm.jsx
import React from 'react';

const CepForm = ({ cep, setCep, handleSubmit, loading }) => {
  return (
    <form onSubmit={handleSubmit} className="cep-form">
      <div className="input-group">
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          maxLength="8"
          className="cep-input"
        />
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>
    </form>
  );
};

export default CepForm;
