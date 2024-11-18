import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HistoricoComprasList = () => {
  const [historicoCompras, setHistoricoCompras] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/purchase-history');
        setHistoricoCompras(response.data);
      } catch (error) {
        console.error('Erro ao buscar histórico de compras:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Histórico de Compras</h2>
      <ul>
        {historicoCompras.map((compra) => (
          <li key={compra.id}>
            Produto: {compra.Product.name}, Fornecedor: {compra.Supplier.name}, Quantidade: {compra.quantity}, Data: {new Date(compra.purchaseDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoricoComprasList;
