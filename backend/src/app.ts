import express from 'express';
import { PORT } from './config/envLoader';

const app = express();
app.set('x-powered-by', false);

app.use(express.json());

app.use('/api/v1', (_req, res) => {
  res.json('ok');
});

app.listen(PORT, () => {
  console.log('Activating Server at http://localhost:' + PORT);
});
