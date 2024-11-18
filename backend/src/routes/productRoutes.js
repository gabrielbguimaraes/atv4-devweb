import express from 'express';
import { pool } from '../db.js'; 

const router = express.Router();

// Função para criar um novo produto
router.post('/products', async (req, res) => {
  const { name, price } = req.body;
  
  try {
    const [result] = await pool.query(
      'INSERT INTO products (name, price) VALUES (?, ?)',
      [name, price]
    );
    res.status(201).json({ id: result.insertId, name, price });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Função para retornar todos os produtos
router.get('/products', async (_req, res) => {
  try {
    const [products] = await pool.query('SELECT * FROM products');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Função para atualizar um produto
router.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const [result] = await pool.query(
      'UPDATE products SET name = ?, price = ? WHERE id = ?',
      [name, price, id]
    );

    if (result.affectedRows) {
      const [updatedProduct] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
      res.json(updatedProduct[0]);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Função para deletar um produto
router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM products WHERE id = ?', [id]);

    if (result.affectedRows) {
      res.status(204).send();
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;