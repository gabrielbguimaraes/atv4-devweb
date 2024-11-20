import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/products'); 
            setProducts(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        Nome: {product.name}, Preço: {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
