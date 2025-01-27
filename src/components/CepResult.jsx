// src/components/CepResult.jsx
import React from 'react';

const CepResult = ({ data }) => {
  return (
    <div className="cep-result">
      <h2>Informações do CEP</h2>
      <div className="result-grid">
        <div>
          <span>CEP:</span>
          <p>{data.cep}</p>
        </div>
        <div>
          <span>Rua:</span>
          <p>{data.logradouro || 'N/A'}</p> {/* 'N/A' significa "Not Available" */}
        </div>
        <div>
          <span>Bairro:</span>
          <p>{data.bairro || 'N/A'}</p>
        </div>
        <div>
          <span>Cidade:</span>
          <p>{data.localidade}</p>
        </div>
        <div>
          <span>Estado:</span>
          <p>{data.uf}</p>
        </div>
        {data.complemento && (
          <div>
            <span>Complemento:</span>
            <p>{data.complemento}</p>
          </div>
        )}
        {data.ibge && (
          <div>
            <span>IBGE:</span>
            <p>{data.ibge}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CepResult;
