import { getConnection, sql, queries } from '../database';


export const getDoctors = async(req, res) => 
{
    try 
    {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllDoctors); 
        res.json(result.recordset);        
    } 
    catch (error) 
    {
        res.status(500)   
        res.send(error.message) 
    }
};

export const createDoctor = async(req, res) =>
{
    const { id, name, age, address, emalAddress, specialty } = req.body
    
    if (id == null || name == null || age == null || address == null || emalAddress  == null || specialty == null)
    {
        return res.status(400).json({msg: 'Bad Request, Please Fill all fields'})
    }
    
    try 
    {
        const pool = await getConnection();
        await pool.request()
        .input('id', sql.Int, id)
        .input('name', sql.VarChar, name)
        .input('age', sql.Int, age)
        .input('address', sql.Text, address)
        .input('emalAddress, ', sql.NVarChar, emalAddress, )
    .input('specialty, ', sql.NVarChar, specialty, )
        .query(queries.addNewDoctor)

        res.json({id, name, age, address, emalAddress, specialty });        
    } 
    catch (error) 
    {
        res.status(500)   
        res.send(error.message) 
    }
};

export const getDoctorById = async (req, res) =>
{
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input('id', id)
    .query(queries.getDoctorById);

    res.send(result.recordset[0]);
};

export const deleteDoctorById = async (req, res) =>
{
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input('id', id)
    .query(queries.deleteDoctorById);

    res.send("SE borro con exito");
};

export const getTotalDoctors = async (req, res) =>
{
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .query(queries.getTotalDoctors);

    console.log(result);

    res.json(result.recordset[0]['']);
};

export const updateDoctorById = async (req,res) =>
{
    const { name, age, address, emalAddress, specialty } = req.body;
    const { id } = req.params

    if (id == null || name == null || age == null || address == null || emalAddress  == null || specialty == null)
    {
        return res.status(400).json({msg: 'Bad Request, Please Fill all fields'})
    } 
    
    const pool = await getConnection();
    await pool.request()
    .input('id', sql.Int, id)
    .input('name', sql.VarChar, name)
    .input('age', sql.Int, age)
    .input('address', sql.Text, address)
    .input('emalAddress, ', sql.NVarChar, emalAddress, )
    .input('specialty, ', sql.NVarChar, specialty, )
    .query(queries.updateDoctorById);

    res.json({id, name, age, address, emalAddress, specialty});
}