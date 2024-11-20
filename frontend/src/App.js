import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CadastroFornecedor from './pages/cadastroFornecedor';
import CadastroProduto from './pages/cadastroProduto';
import ProductList from './components/productList';
import RegistroCompras from './pages/registroCompras';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';
import RegistroComprasList from './pages/registroCompraList';


const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto mt-4">
                <Routes>
                    <Route path="/fornecedor" element={<CadastroFornecedor />} />
                    <Route path="/produto" element={<CadastroProduto />} />
                    <Route path="/lista-produtos" element={<ProductList />} />
                    <Route path="/compras" element={<RegistroCompras />} />
                    <Route path="/lista-compras" element={<RegistroComprasList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
