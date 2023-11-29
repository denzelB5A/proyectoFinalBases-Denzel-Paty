import { Router } from 'express';
import {
  getQuirofano,
  createQuirofano,
  getQuirofanoById,
  deleteQuirofanoById,
  getTotalQuirofano,
  updateQuirofanoById,
} from '../controllers/quirofano.controller';

const router = Router();

router.get('/quirofanos', getQuirofano);

router.post('/quirofanos', createQuirofano);

router.get('/quirofanos/:numero_quirofano', getQuirofanoById);

router.delete('/quirofanos/:numero_quirofano', deleteQuirofanoById);

router.get('/quirofanos/count', getTotalQuirofano);

router.put('/quirofanos/:numero_quirofano', updateQuirofanoById);

export default router;
