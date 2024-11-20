import express from 'express';
import { pool } from '../db.js';

const router = express.Router();

// Função para criar um novo fornecedor
router.post('/suppliers', async (req, res) => {
    const { name, contact } = req.body;

    // Verifique se os campos estão presentes
    if (!name || !contact) {
        return res.status(400).json({ error: "Name and contact are required." });
    }

    const currentTimestamp = new Date();

    try {
        const [result] = await pool.query(
            'INSERT INTO suppliers (name, contact, createdAt, updatedAt) VALUES (?, ?, ?, ?)', 
            [name, contact, currentTimestamp, currentTimestamp]
        );
        res.status(201).json({ id: result.insertId, name, contact, createdAt: currentTimestamp, updatedAt: currentTimestamp });
    } catch (error) {
        console.error('Erro ao cadastrar fornecedor:', error);
        res.status(500).json({ error: error.message });
    }
});
// Função para retornar todos os fornecedores
router.get('/suppliers', async (_req, res) => {
  try {
    const [suppliers] = await pool.query('SELECT * FROM suppliers');
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Função para atualizar um fornecedor
router.put('/suppliers/:id', async (req, res) => {
  const { id } = req.params;
  const { name, contact } = req.body; // Atualiza o contato

  try {
    const [result] = await pool.query(
      'UPDATE suppliers SET name = ?, contact = ? WHERE id = ?',
      [name, contact, id]
    );

    if (result.affectedRows) {
      const [updatedSupplier] = await pool.query('SELECT * FROM suppliers WHERE id = ?', [id]);
      res.json(updatedSupplier[0]);
    } else {
      res.status(404).send('Supplier not found');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Função para deletar um fornecedor
router.delete('/suppliers/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM suppliers WHERE id = ?', [id]);

    if (result.affectedRows) {
      res.status(204).send();
    } else {
      res.status(404).send('Supplier not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;