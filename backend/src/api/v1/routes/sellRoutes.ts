import { Router } from 'express';
import { getSells } from '../controllers/sellController';

const router = Router();

router.get('/sells', getSells);

export default router;
