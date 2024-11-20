import express from 'express';
import { PurchaseHistory } from '../models/index.js';

const router = express.Router();


router.post('/purchase-history', async (req, res) => {
    const { productId, supplierId, quantity, purchaseDate } = req.body;

   
    if (!productId || !supplierId || !quantity || !purchaseDate) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    try {
        const purchaseHistory = await PurchaseHistory.create({ 
            productId, 
            supplierId,
            quantity,
            purchaseDate 
        });
        res.status(201).json(purchaseHistory); 
    } catch (error) {
        console.error('Erro ao registrar histórico de compras:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;