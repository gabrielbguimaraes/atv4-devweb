import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RegistroCompras = () => {
    const [products, setProducts] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [formData, setFormData] = useState({
        productId: '',
        supplierId: '',
        quantity: 0,
        purchaseDate: ''
    });

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    const fetchSuppliers = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/suppliers');
            setSuppliers(response.data);
        } catch (error) {
            console.error('Erro ao buscar fornecedores:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchSuppliers();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/purchase-history', formData);
            alert('Histórico de compras registrado com sucesso!');
        } catch (error) {
            console.error('Erro ao registrar histórico de compras:', error.response ? error.response.data : error.message);
            alert('Erro ao registrar histórico de compras.');
        }
    };

    return (
        <div>
            <h2>Registro de Compras</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Produto:</label>
                    <select name="productId" value={formData.productId} onChange={handleChange} required>
                        <option value="">Selecione um produto</option>
                        {products.map((product) => (
                            <option key={product.id} value={product.id}>{product.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Fornecedor:</label>
                    <select name="supplierId" value={formData.supplierId} onChange={handleChange} required>
                        <option value="">Selecione um fornecedor</option>
                        {suppliers.map((supplier) => (
                            <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input 
                        type="number" 
                        name="quantity" 
                        value={formData.quantity} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Data da Compra:</label>
                    <input 
                        type="date" 
                        name="purchaseDate" 
                        value={formData.purchaseDate} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit">Registrar Compra</button>
            </form>
        </div>
    );
};

export default RegistroCompras;
