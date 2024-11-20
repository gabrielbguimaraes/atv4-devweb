import React, { useState } from 'react';
import axios from 'axios';

const CadastroProduto = () => {
    const [produto, setProduto] = useState({ name: '', price: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/products', produto);
            alert('Produto cadastrado com sucesso!');
            setProduto({ name: '', price: 0 });
        } catch (error) {
            console.error(error);
            alert('Erro ao cadastrar produto.');
        }
    };

    return (
        <div className="container">
            <h2 className="text-2xl font-bold mt-4">Cadastro de Produto</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nomeProduto" className="form-label">Nome do Produto</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nomeProduto"
                        name="name"
                        value={produto.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="precoProduto" className="form-label">Preço</label>
                    <input
                        type="number"
                        className="form-control"
                        id="precoProduto"
                        name="price"
                        value={produto.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar Produto</button>
            </form>
        </div>
    );
};

export default CadastroProduto;