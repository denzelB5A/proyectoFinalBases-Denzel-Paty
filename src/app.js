import express from 'express'
import config from './config'

import patientRoutes from './routes/patient.routes'

const app = express()

//settings
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(patientRoutes)

export default app