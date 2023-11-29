import { getConnection, sql, queries } from '../database';

export const getQuirofano = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllQuirofano);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createQuirofano = async (req, res) => {
  const { numero_quirofano, id_doctor, id_patient, n_enfermeros } = req.body;

  if (
    numero_quirofano == null ||
    id_doctor == null ||
    id_patient == null ||
    n_enfermeros == null
  ) {
    return res
      .status(400)
      .json({ msg: 'Bad Request, Please Fill all fields' });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input('numero_quirofano', sql.Int, numero_quirofano)
      .input('id_doctor', sql.Int, id_doctor)
      .input('id_patient', sql.Int, id_patient)
      .input('n_enfermeros', sql.Int, n_enfermeros)
      .query(queries.addNewQuirofano);

    res.json({
      numero_quirofano,
      id_doctor,
      id_patient,
      n_enfermeros,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getQuirofanoById = async (req, res) => {
  const { numero_quirofano } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('numero_quirofano', numero_quirofano)
    .query(queries.getQuirofanoById);

  res.send(result.recordset[0]);
};

export const deleteQuirofanoById = async (req, res) => {
  const { numero_quirofano } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('numero_quirofano', numero_quirofano)
    .query(queries.deleteQuirofanoById);

  res.send('Se borró con éxito');
};

export const getTotalQuirofano = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getTotalQuirofano);

  res.json(result.recordset[0]['']);
};

export const updateQuirofanoById = async (req, res) => {
  const { id_doctor, id_patient, n_enfermeros } = req.body;
  const { numero_quirofano } = req.params;

  if (
    numero_quirofano == null ||
    id_doctor == null ||
    id_patient == null ||
    n_enfermeros == null
  ) {
    return res
      .status(400)
      .json({ msg: 'Bad Request, Please Fill all fields' });
  }

  const pool = await getConnection();
  await pool
    .request()
    .input('numero_quirofano', sql.Int, numero_quirofano)
    .input('id_doctor', sql.Int, id_doctor)
    .input('id_patient', sql.Int, id_patient)
    .input('n_enfermeros', sql.Int, n_enfermeros)
    .query(queries.updateQuirofanoById);

  res.json({
    numero_quirofano,
    id_doctor,
    id_patient,
    n_enfermeros,
  });
};
