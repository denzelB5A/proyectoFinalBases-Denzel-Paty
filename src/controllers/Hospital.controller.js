import { getConnection, sql, queries } from '../database';

export const getHospital = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllHospital);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createHospital = async (req, res) => {
  const {
    id_hospital,
    nombre,
    direccion,
    telefono,
    capacidad_camas,
    especialidad,
  } = req.body;

  if (
    id_hospital == null ||
    nombre == null ||
    direccion == null ||
    capacidad_camas == null ||
    especialidad == null
  ) {
    return res
      .status(400)
      .json({ msg: 'Bad Request, Please Fill all fields' });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input('id_hospital', sql.Int, id_hospital)
      .input('nombre', sql.NVarChar, nombre)
      .input('direccion', sql.Text, direccion)
      .input('telefono', sql.NVarChar, telefono)
      .input('capacidad_camas', sql.Int, capacidad_camas)
      .input('especialidad', sql.NVarChar, especialidad)
      .query(queries.addNewHospital);

    res.json({
      id_hospital,
      nombre,
      direccion,
      telefono,
      capacidad_camas,
      especialidad,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getHospitalById = async (req, res) => {
  const { id_hospital } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('id', id_hospital)
    .query(queries.getHospitalById);

  res.send(result.recordset[0]);
};

export const deleteHospitalById = async (req, res) => {
  const { id_hospital } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('id', id_hospital)
    .query(queries.deleteHospitalById);

  res.send('Se borró con éxito');
};

export const getTotalHospital = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getTotalHospital);

  res.json(result.recordset[0]['']);
};

export const updateHospitalById = async (req, res) => {
  const {
    nombre,
    direccion,
    telefono,
    capacidad_camas,
    especialidad,
  } = req.body;
  const { id_hospital } = req.params;

  if (
    id_hospital == null ||
    nombre == null ||
    direccion == null ||
    capacidad_camas == null ||
    especialidad == null
  ) {
    return res
      .status(400)
      .json({ msg: 'Bad Request, Please Fill all fields' });
  }

  const pool = await getConnection();
  await pool
    .request()
    .input('id_hospital', sql.Int, id_hospital)
    .input('nombre', sql.NVarChar, nombre)
    .input('direccion', sql.Text, direccion)
    .input('telefono', sql.NVarChar, telefono)
    .input('capacidad_camas', sql.Int, capacidad_camas)
    .input('especialidad', sql.NVarChar, especialidad)
    .query(queries.updateHospitalById);

  res.json({
    id_hospital,
    nombre,
    direccion,
    telefono,
    capacidad_camas,
    especialidad,
  });
};
