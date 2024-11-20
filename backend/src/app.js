import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes.js';
import purchaseHistoryRoutes from './routes/purchaseHistoryRoutes.js';
import supplierRoutes from './routes/supplierRoutes.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Usar as rotas
app.use('/api', productRoutes);
app.use('/api', supplierRoutes);
app.use('/api', purchaseHistoryRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
