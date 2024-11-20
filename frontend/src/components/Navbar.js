import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white text-xl">Meu App</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/fornecedor" className="text-white hover:underline">
                            Cadastro Fornecedor
                        </Link>
                    </li>
                    <li>
                        <Link to="/produto" className="text-white hover:underline">
                            Cadastro Produto
                        </Link>
                    </li>
                    <li>
                        <Link to="/lista-produtos" className="text-white hover:underline">
                            Lista Produtos
                        </Link>
                    </li>
                    <li>
                        <Link to="/compras" className="text-white hover:underline">
                            Registro Compras
                        </Link>
                    </li>
                    <li>
                        <Link to="/lista-compras" className="text-white hover:underline">
                            Lista de Compras
                        </Link>
                    </li> 
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;