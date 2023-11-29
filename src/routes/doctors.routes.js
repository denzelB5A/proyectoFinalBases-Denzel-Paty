import {Router} from 'express'

import { getDoctors, createDoctor, getDoctorById, deleteDoctorById, getTotalDoctors,updateDoctorById } from '../controllers/doctors.controller';

const router = Router()

router.get('/doctors', getDoctors)

router.post('/doctors', createDoctor)

router.get('/doctors/count', getDoctorById)

router.get('/doctors/:id', deleteDoctorById)

router.delete('/doctors/:id', getTotalDoctors)

router.put('/doctors/:id', updateDoctorById)

export default router