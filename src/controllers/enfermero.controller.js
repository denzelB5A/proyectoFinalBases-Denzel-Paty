import { getConnection, sql, queries } from '../database';

export const getEnfermero = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllEnfermero);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createEnfermero = async (req, res) => {
    const {
      id_enfermero,
      id_patient,
      id_doctor,
      n_quirofano,
      fecha_hora,
      patient_condition,
      nombre,
      edad,
      correoElectronico,
    } = req.body;
  
    if (
      id_enfermero == null ||
      id_patient == null ||
      id_doctor == null ||
      n_quirofano == null ||
      fecha_hora == null ||
      patient_condition == null ||
      nombre == null ||
      edad == null ||
      correoElectronico == null
    ) {
      return res
        .status(400)
        .json({ msg: 'Bad Request, Please Fill all fields' });
    }
  
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input('id_enfermero', sql.Int, id_enfermero)
        .input('id_patient', sql.Int, id_patient)
        .input('id_doctor', sql.Int, id_doctor)
        .input('n_quirofano', sql.NChar, n_quirofano)
        .input('fecha_hora', sql.DateTime, fecha_hora)
        .input('patient_condition', sql.Text, patient_condition)
        .input('nombre', sql.NVarChar, nombre)
        .input('edad', sql.Int, edad)
        .input('correoElectronico', sql.NVarChar, correoElectronico)
        .query(queries.addNewEnfermero);
  
      res.json({
        id_enfermero,
        id_patient,
        id_doctor,
        n_quirofano,
        fecha_hora,
        patient_condition,
        nombre,
        edad,
        correoElectronico,
      });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  

export const getEnfermeroById = async (req, res) => {
  const { id_enfermero } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('id', id_enfermero)
    .query(queries.getEnfermeroById);

  res.send(result.recordset[0]);
};

export const deleteEnfermeroById = async (req, res) => {
  const { id_enfermero } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('id', id_enfermero)
    .query(queries.deleteEnfermeroById);

  res.send('Se borró con éxito');
};

export const getTotalEnfermero = async (req, res) => {
    const { id_enfermero } = req.params;
  
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id', sql.Int, id_enfermero)
      .query(queries.getTotalEnfermero);
  
    res.json(result.recordset[0]['']);
  };
  
  export const updateEnfermeroById = async (req, res) => {
    const {
      id_enfermero,
      id_patient,
      id_doctor,
      n_quirofano,
      fecha_hora,
      patient_condition,
      nombre,
      edad,
      correoElectronico,
    } = req.body;
  
    if (
      id_enfermero == null ||
      id_patient == null ||
      id_doctor == null ||
      n_quirofano == null ||
      fecha_hora == null ||
      patient_condition == null ||
      nombre == null ||
      edad == null ||
      correoElectronico == null
    ) {
      return res
        .status(400)
        .json({ msg: 'Bad Request, Please Fill all fields' });
    }
  
    const pool = await getConnection();
    await pool
      .request()
      .input('id_enfermero', sql.Int, id_enfermero)
      .input('id_patient', sql.Int, id_patient)
      .input('id_doctor', sql.Int, id_doctor)
      .input('n_quirofano', sql.NChar, n_quirofano)
      .input('fecha_hora', sql.DateTime, fecha_hora)
      .input('patient_condition', sql.Text, patient_condition)
      .input('nombre', sql.NVarChar, nombre)
      .input('edad', sql.Int, edad)
      .input('correoElectronico', sql.NVarChar, correoElectronico)
      .query(queries.updateEnfermeroById);
  
    res.json({
      id_enfermero,
      id_patient,
      id_doctor,
      n_quirofano,
      fecha_hora,
      patient_condition,
      nombre,
      edad,
      correoElectronico,
    });
  };
  
