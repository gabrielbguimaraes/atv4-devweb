import express from 'express';
import { PurchaseHistory, Product, Supplier } from '../models/index.js';

const router = express.Router();

router.post('/purchase-history', async (req, res) => {
  const { productId, supplierId, quantity, purchaseDate } = req.body;

  try {
    const purchaseHistory = await PurchaseHistory.create({ productId, supplierId, quantity, purchaseDate });
    res.status(201).json(purchaseHistory);
  } catch (error) {
    console.error('Erro ao registrar histórico de compras:', error);
    res.status(400).json({ error: error.message });
  }
});

router.get('/purchase-history', async (_req, res) => {
  try {
    const histories = await PurchaseHistory.findAll({
      include: [Product, Supplier]
    });
    res.json(histories);
  } catch (error) {
    console.error('Erro ao buscar histórico de compras:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;