import { Router } from 'express';
import {
  getAmbulancia,
  createAmbulancia,
  getAmbulanciaById,
  deleteAmbulanciaById,
  getTotalAmbulancia,
  updateAmbulanciaById,
} from '../controllers/ambulancia.controller';

const router = Router();

router.get('/ambulancias', getAmbulancia);

router.post('/ambulancias', createAmbulancia);

router.get('/ambulancias/count', getAmbulanciaById);

router.get('/ambulancias/:id', deleteAmbulanciaById);

router.delete('/ambulancias/:id', getTotalAmbulancia);

router.put('/ambulancias/:id', updateAmbulanciaById);

export default router;
