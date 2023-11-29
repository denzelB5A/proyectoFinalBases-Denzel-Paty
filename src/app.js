import express from 'express'
import config from './config'

import patientRoutes from './routes/patient.routes'

import doctorsRoutes from './routes/doctors.routes'

import consultaRoutes from "./routes/consulta.routes";

import enfermeroRoutes from "./routes/enfermero.routes";

import ambulanciaRoutes from "./routes/ambulancia.routes";

import quirofanoRoutes from "./routes/quirofano.routes";

import HospitalRoutes from "./routes/Hospital.routes";

const app = express()

//settings
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(patientRoutes)

app.use(doctorsRoutes)

app.use(consultaRoutes)

app.use(enfermeroRoutes)

app.use(ambulanciaRoutes)

app.use(quirofanoRoutes)

app.use(HospitalRoutes)

export default app