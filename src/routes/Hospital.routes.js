import { Router } from 'express';
import {
  getHospital,
  createHospital,
  getHospitalById,
  deleteHospitalById,
  getTotalHospital,
  updateHospitalById,
} from '../controllers/Hospital.controller';

const router = Router();

router.get('/hospitals', getHospital);

router.post('/hospitals', createHospital);

router.get('/hospitals/:id', getHospitalById);

router.delete('/hospitals/:id', deleteHospitalById);

router.get('/hospitals/count', getTotalHospital);

router.put('/hospitals/:id', updateHospitalById);

export default router;
