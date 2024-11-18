import React, { useEffect, useState } from 'react';
import HistoricoComprasForm from './components/HistoricoComprasForm';
import HistoricoComprasList from './components/HistoricoComprasList';
import axios from 'axios';

const App = () => {
  const [historicoCompras, setHistoricoCompras] = useState([]);

  const fetchHistoricoCompras = async () => {
    try {
      const response = await axios.get('http://localhost:3001/purchase-history');
      setHistoricoCompras(response.data);
    } catch (error) {
      console.error('Erro ao buscar histórico de compras:', error);
    }
  };

  useEffect(() => {
    fetchHistoricoCompras();
  }, []);

  const updateHistoricoCompras = (novoRegistro) => {
    setHistoricoCompras(prevHistorico => [...prevHistorico, novoRegistro]);
  };

  return (
    <div className="App">
      <h1>Registro de Histórico de Compras</h1>
      <HistoricoComprasForm onRegistro={updateHistoricoCompras} />
      <HistoricoComprasList historicoCompras={historicoCompras} />
    </div>
  );
};

export default App;
