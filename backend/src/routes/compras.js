import express from 'express';
import PurchaseHistory from '../models/PurchaseHistory.js';
import Produto from '../models/Product.js';
import Fornecedor from '../models/Supplier.js';

const router = express.Router();

router.get('/compras', async (req, res) => {
    console.log('Recebendo requisição para /compras');

    try {
        const registros = await PurchaseHistory.findAll({
            include: [
                { model: Produto },
                { model: Fornecedor }
            ]
        });

        console.log('Registros obtidos:', registros);

        if (!registros || registros.length === 0) {
            return res.status(404).json({ error: 'Nenhum registro de compra encontrado' });
        }

        res.json(registros.map(registro => ({
            id: registro.id,
            produtoNome: registro.Product ? registro.Product.name : 'Produto não disponível', 
            fornecedorNome: registro.Supplier ? registro.Supplier.name : 'Fornecedor não disponível', 
            data: registro.purchaseDate 
        })));
    } catch (error) {
        console.error('Erro ao buscar registros de compras:', error);
        res.status(500).json({ error: 'Erro ao buscar registros de compras' });
    }
});

export default router;
