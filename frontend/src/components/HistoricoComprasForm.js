import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HistoricoComprasForm = ({ onRegistro }) => {
  const [formData, setFormData] = useState({
    productId: '',
    supplierId: '',
    quantity: 0,
    purchaseDate: ''
  });
  
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    };

    const fetchSuppliers = async () => {
      const response = await axios.get('http://localhost:3001/suppliers');
      setSuppliers(response.data);
    };

    fetchProducts();
    fetchSuppliers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "quantity" ? parseInt(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/purchase-history', formData);
      console.log('Histórico de compras registrado:', response.data);
      onRegistro(response.data);
      setFormData({ productId: '', supplierId: '', quantity: 0, purchaseDate: '' });
    } catch (error) {
      console.error('Erro ao registrar histórico de compras', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="productId">Produto:</label>
        <select
          id="productId"
          name="productId"
          value={formData.productId}
          onChange={handleInputChange}
          required
        >
          <option value="">Selecione um produto</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="supplierId">Fornecedor:</label>
        <select
          id="supplierId"
          name="supplierId"
          value={formData.supplierId}
          onChange={handleInputChange}
          required
        >
          <option value="">Selecione um fornecedor</option>
          {suppliers.map(supplier => (
            <option key={supplier.id} value={supplier.id}>
              {supplier.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="quantity">Quantidade:</label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="purchaseDate">Data:</label>
        <input
          id="purchaseDate"
          name="purchaseDate"
          type="date"
          value={formData.purchaseDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Registrar Histórico de Compras</button>
    </form>
  );
};

export default HistoricoComprasForm;