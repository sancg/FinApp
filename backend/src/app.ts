import express from 'express';
import { PORT } from './config/envLoader';
import sellRoutes from './api/v1/routes/sellRoutes';
import productRoutes from './api/v1/routes/productRoute';

const app = express();
app.set('x-powered-by', false);

app.use(express.json());

// Mount the product routes
app.use('/api/v1', productRoutes);
app.use('/api/v1', sellRoutes);

app.use('/api/v1', (_req, res) => {
  res.json('ok');
});

app.listen(PORT, () => {
  console.log('Activating Server at http://localhost:' + PORT);
});
