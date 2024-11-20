import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PurchaseList = () => {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const response = await axios.get('/api/purchases'); // Altere a URL conforme necessário
                setPurchases(response.data);
            } catch (error) {
                console.error('Erro ao buscar compras:', error);
            }
        };

        fetchPurchases();
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-4">Registro de Compras</h2>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Data</th>
                        <th className="border border-gray-300 px-4 py-2">Produto</th>
                        <th className="border border-gray-300 px-4 py-2">Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map((purchase) => (
                        <tr key={purchase.id}>
                            <td className="border border-gray-300 px-4 py-2">{new Date(purchase.date).toLocaleDateString()}</td>
                            <td className="border border-gray-300 px-4 py-2">{purchase.productName}</td>
                            <td className="border border-gray-300 px-4 py-2">{purchase.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PurchaseList;
