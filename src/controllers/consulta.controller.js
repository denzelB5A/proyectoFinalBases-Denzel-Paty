import { getConnection, sql, queries } from '../database';


export const getConsulta = async(req, res) => 
{
    try 
    {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllConsulta); 
        res.json(result.recordset);        
    } 
    catch (error) 
    {
        res.status(500)   
        res.send(error.message) 
    }
};

export const createConsulta = async(req, res) =>
{
    const { id_consulta, id_patient, id_doctor, n_consultorio, patient_condition } = req.body
    
    if (id_consulta == null || id_patient == null || id_doctor == null || n_consultorio == null || patient_condition  == null )
    {
        return res.status(400).json({msg: 'Bad Request, Please Fill all fields'})
    }
    
    try 
    {
        const pool = await getConnection();
        await pool.request()
        .input('id', sql.Int, id_consulta)
        .input('name', sql.Int, id_patient)
        .input('age', sql.Int, id_doctor)
        .input('address', sql.NChar, n_consultorio)
        .input('emalAddress, ', sql.Text, patient_condition )
        .query(queries.addNewConsulta)

        res.json({ id_consulta, id_patient, id_doctor, n_consultorio, patient_condition });        
    } 
    catch (error) 
    {
        res.status(500)   
        res.send(error.message) 
    }
};

export const getConsultaById = async (req, res) =>
{
    const {id_consulta} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input('id', id_consulta)
    .query(queries.getConsultaById);

    res.send(result.recordset[0]);
};

export const deleteConsultaById = async (req, res) =>
{
    const {id_consulta} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input('id', id_consulta)
    .query(queries.deleteConsultaById);

    res.send("SE borro con exito");
};

export const getTotalConsulta = async (req, res) =>
{
    const {id_consulta} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .query(queries.getTotalConsulta);

    console.log(result);

    res.json(result.recordset[0]['']);
};

export const updateConsultaById = async (req,res) =>
{
    const { id_patient, id_doctor, n_consultorio, patient_condition } = req.body;
    const { id_consulta } = req.params

    if (id_consulta == null || id_patient == null || id_doctor == null || n_consultorio == null || patient_condition  == null )
    {
        return res.status(400).json({msg: 'Bad Request, Please Fill all fields'})
    } 
    
    const pool = await getConnection();
    await pool.request()
    .input('id', sql.Int, id_consulta)
    .input('name', sql.Int, id_patient)
    .input('age', sql.Int, id_doctor)
    .input('address', sql.NChar, n_consultorio)
    .input('emalAddress, ', sql.Text, patient_condition )
    .query(queries.updateConsultaById);

    res.json({id_consulta, id_patient, id_doctor, n_consultorio, patient_condition});
}