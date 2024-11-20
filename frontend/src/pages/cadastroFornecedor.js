import React, { useState } from 'react';
import axios from 'axios';

const CadastroFornecedor = () => {
    const [fornecedor, setFornecedor] = useState({ name: '', contact: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFornecedor({ ...fornecedor, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/suppliers', fornecedor);
            alert('Fornecedor cadastrado com sucesso!');
            setFornecedor({ name: '', contact: '' });
        } catch (error) {
            console.error('Erro ao cadastrar fornecedor:', error.response ? error.response.data : error.message);
            alert('Erro ao cadastrar fornecedor.');
        }
    };

    return (
        <div className="container">
            <h2 className="text-2xl font-bold mt-4">Cadastro de Fornecedor</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nomeFornecedor" className="form-label">Nome do Fornecedor</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nomeFornecedor"
                        name="name"
                        value={fornecedor.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contatoFornecedor" className="form-label">Contato</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contatoFornecedor"
                        name="contact"
                        value={fornecedor.contact}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar Fornecedor</button>
            </form>
        </div>
    );
};

export default CadastroFornecedor;
