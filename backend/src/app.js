import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes.js';
import purchaseHistoryRoutes from './routes/purchaseHistoryRoutes.js';
import supplierRoutes from './routes/supplierRoutes.js';
import comprasRoutes from './routes/compras.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', productRoutes);
app.use('/api', supplierRoutes);
app.use('/api', purchaseHistoryRoutes);
app.use('/api', comprasRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
