import {Router} from 'express'

import { getConsulta, createConsulta, getConsultaById, deleteConsultaById, getTotalConsulta, updateConsultaById } from '../controllers/consulta.controller';

const router = Router()

router.get('/doctors', getConsulta)

router.post('/doctors', createConsulta)

router.get('/doctors/count', getConsultaById)

router.get('/doctors/:id', deleteConsultaById)

router.delete('/doctors/:id', getTotalConsulta)

router.put('/doctors/:id', updateConsultaById)

export default router