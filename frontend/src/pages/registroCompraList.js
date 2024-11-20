import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RegistroComprasList = () => {
    const [registros, setRegistros] = useState([]);

    const fetchRegistros = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/compras');
            setRegistros(response.data);
        } catch (error) {
            console.error('Erro ao buscar registros de compras:', error);
        }
    };

    useEffect(() => {
        fetchRegistros();
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-4">Registro de Compras</h2>
            <ul className="list-disc list-inside">
                {registros.length > 0 ? (
                    registros.map((registro) => (
                        <li key={registro.id} className="mb-2">
                            <strong>Produto:</strong> {registro.produtoNome} 
                            <br />
                            <strong>Fornecedor:</strong> {registro.fornecedorNome} 
                            <br />
                            <strong>Data:</strong> {new Date(registro.data).toLocaleDateString()}
                        </li>
                    ))
                ) : (
                    <li>Não há registros de compras disponíveis.</li>
                )}
            </ul>
        </div>
    );
};

export default RegistroComprasList;