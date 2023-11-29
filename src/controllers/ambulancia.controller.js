import { getConnection, sql, queries } from '../database';

export const getAmbulancia = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllAmbulancia);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createAmbulancia = async (req, res) => {
  const {
    id_ambulancia,
    id_patient,
    id_enfermero,
    direccion,
    hospital,
  } = req.body;

  if (
    id_ambulancia == null ||
    id_patient == null ||
    id_enfermero == null ||
    direccion == null ||
    hospital == null
  ) {
    return res
      .status(400)
      .json({ msg: 'Bad Request, Please Fill all fields' });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input('id_ambulancia', sql.Int, id_ambulancia)
      .input('id_patient', sql.Int, id_patient)
      .input('id_enfermero', sql.Int, id_enfermero)
      .input('direccion', sql.Text, direccion)
      .input('hospital', sql.Text, hospital)
      .query(queries.addNewAmbulancia);

    res.json({
      id_ambulancia,
      id_patient,
      id_enfermero,
      direccion,
      hospital,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getAmbulanciaById = async (req, res) => {
  const { id_ambulancia } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('id', id_ambulancia)
    .query(queries.getAmbulanciaById);

  res.send(result.recordset[0]);
};

export const deleteAmbulanciaById = async (req, res) => {
  const { id_ambulancia } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('id', id_ambulancia)
    .query(queries.deleteAmbulanciaById);

  res.send('Se borró con éxito');
};

export const getTotalAmbulancia = async (req, res) => {
  const { id_ambulancia } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('id', sql.Int, id_ambulancia)
    .query(queries.getTotalAmbulancia);

  res.json(result.recordset[0]['']);
};

export const updateAmbulanciaById = async (req, res) => {
  const {
    id_ambulancia,
    id_patient,
    id_enfermero,
    direccion,
    hospital,
  } = req.body;

  if (
    id_ambulancia == null ||
    id_patient == null ||
    id_enfermero == null ||
    direccion == null ||
    hospital == null
  ) {
    return res
      .status(400)
      .json({ msg: 'Bad Request, Please Fill all fields' });
  }

  const pool = await getConnection();
  await pool
    .request()
    .input('id_ambulancia', sql.Int, id_ambulancia)
    .input('id_patient', sql.Int, id_patient)
    .input('id_enfermero', sql.Int, id_enfermero)
    .input('direccion', sql.Text, direccion)
    .input('hospital', sql.Text, hospital)
    .query(queries.updateAmbulanciaById);

  res.json({
    id_ambulancia,
    id_patient,
    id_enfermero,
    direccion,
    hospital,
  });
};
