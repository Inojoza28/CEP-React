// src/App.jsx
import { useState } from 'react';
import './App.css';
import CepForm from './components/CepForm';
import CepResult from './components/CepResult';

function App() {
  const [cep, setCep] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData(null);
    setError('');

    const cepRegex = /^[0-9]{8}$/;
    if (!cepRegex.test(cep)) {
      setError('Por favor, insira um CEP válido com 8 dígitos numéricos.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const result = await response.json();

      if (result.erro) {
        setError('CEP não encontrado.');
      } else {
        setData(result);
      }
    } catch (err) {
      setError('Ocorreu um erro ao buscar o CEP. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>Consulta de CEP</h1>
        <CepForm cep={cep} setCep={setCep} handleSubmit={handleSubmit} loading={loading} />
        {error && <p className="error-message">{error}</p>}
        {data && <CepResult data={data} />}
      </div>
    </div>
  );
}

export default App;
