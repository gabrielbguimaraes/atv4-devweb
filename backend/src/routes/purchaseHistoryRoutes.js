import express from 'express';
import { PurchaseHistory } from '../models/index.js';

const router = express.Router();

// Rota POST para registrar histórico de compras
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

// Rota GET para buscar histórico de compras
router.get('/purchase-history', async (req, res) => {
    try {
        const purchaseHistories = await PurchaseHistory.findAll();

        if (!purchaseHistories || purchaseHistories.length === 0) {
            return res.status(404).json({ message: 'Nenhum histórico de compras encontrado.' });
        }

        res.json(purchaseHistories); 
    } catch (error) {
        console.error('Erro ao buscar histórico de compras:', error);
        res.status(500).json({ error: error.message });
    }
});

// Rota PUT para atualizar histórico de compras
router.put('/purchase-history/:id', async (req, res) => {
    const { id } = req.params; 
    const { productId, supplierId, quantity, purchaseDate } = req.body;


    if (!productId || !supplierId || !quantity || !purchaseDate) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    try {
        const purchaseHistory = await PurchaseHistory.findByPk(id);
        if (!purchaseHistory) {
            return res.status(404).json({ error: 'Histórico de compras não encontrado' });
        }


        purchaseHistory.productId = productId;
        purchaseHistory.supplierId = supplierId;
        purchaseHistory.quantity = quantity;
        purchaseHistory.purchaseDate = purchaseDate;

        await purchaseHistory.save();
        res.json(purchaseHistory); 
    } catch (error) {
        console.error('Erro ao atualizar histórico de compras:', error);
        res.status(500).json({ error: error.message });
    }
});

// Rota DELETE para remover histórico de compras
router.delete('/purchase-history/:id', async (req, res) => {
    const { id } = req.params; 

    try {
        const purchaseHistory = await PurchaseHistory.findByPk(id);
        if (!purchaseHistory) {
            return res.status(404).json({ error: 'Histórico de compras não encontrado' });
        }
        
        await purchaseHistory.destroy(); 
        res.status(204).send();
    } catch (error) {
        console.error('Erro ao deletar histórico de compras:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;
