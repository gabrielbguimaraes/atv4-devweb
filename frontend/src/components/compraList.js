import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompraList = () => {
    const [compras, setCompras] = useState([]);

    useEffect(() => {
        const fetchCompras = async () => {
            try {
                const response = await axios.get('/api/compras');
                setCompras(response.data);
            } catch (error) {
                console.error('Erro ao buscar registros de compras:', error);
            }
        };

        fetchCompras();
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-4">Registro de Compras</h2>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Data</th>
                        <th className="border border-gray-300 px-4 py-2">Fornecedor</th>
                    </tr>
                </thead>
                <tbody>
                    {compras.length > 0 ? (
                        compras.map((compra) => (
                            <tr key={compra.id}>
                                <td className="border border-gray-300 px-4 py-2">
                                    {new Date(compra.data).toLocaleDateString()}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {compra.fornecedorNome}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="text-center border border-gray-300 px-4 py-2">
                                Nenhum registro encontrado.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CompraList;