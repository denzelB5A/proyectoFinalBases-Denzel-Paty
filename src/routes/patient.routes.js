import {Router} from 'express'

import {createPatient, deleteProductById, getPatient, getPatientById, getTotalPatients, updatePatientsById} from '../controllers/patient.controller';

const router = Router()

router.get('/patient', getPatient)

router.post('/patient', createPatient)

router.get('/patient/count', getTotalPatients)

router.get('/patient/:id', getPatientById)

router.delete('/patient/:id', deleteProductById)

router.put('/patient/:id', updatePatientsById)

export default router