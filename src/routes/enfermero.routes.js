import { Router } from 'express';
import {
  getEnfermero,
  createEnfermero,
  getEnfermeroById,
  deleteEnfermeroById,
  getTotalEnfermero,
  updateEnfermeroById,
} from '../controllers/enfermero.controller';

const router = Router();

router.get('/enfermeros', getEnfermero);

router.post('/enfermeros', createEnfermero);

router.get('/enfermeros/count', getEnfermeroById);

router.get('/enfermeros/:id', deleteEnfermeroById);

router.delete('/enfermeros/:id', getTotalEnfermero);

router.put('/enfermeros/:id', updateEnfermeroById);

export default router;
