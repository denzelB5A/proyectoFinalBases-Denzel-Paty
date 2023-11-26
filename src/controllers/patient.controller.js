import { getConnection, sql, queries } from '../database';


export const getPatient = async(req, res) => 
{
    try 
    {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllPatients); 
        res.json(result.recordset);        
    } 
    catch (error) 
    {
        res.status(500)   
        res.send(error.message) 
    }
};

export const createPatient = async(req, res) =>
{
    const { id, name, age, address, condition } = req.body
    
    if (id == null || name == null || age == null || address == null || condition == null)
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
        .input('condition', sql.Text, condition)
        .query(queries.addNewPatient)

        res.json({id,name,age,address,condition});        
    } 
    catch (error) 
    {
        res.status(500)   
        res.send(error.message) 
    }
};

export const getPatientById = async (req, res) =>
{
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input('id', id)
    .query(queries.getPatientById);

    res.send(result.recordset[0]);
};

export const deleteProductById = async (req, res) =>
{
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input('id', id)
    .query(queries.deleteProduct);

    res.send("SE borro con exito");
};

export const getTotalPatients = async (req, res) =>
{
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .query(queries.getTotalPatients);

    console.log(result);

    res.json(result.recordset[0]['']);
};

export const updatePatientsById = async (req,res) =>
{
    const { name, age, address, condition } = req.body;
    const { id } = req.params

    if (name == null || age == null || address == null || condition == null)
    {
        return res.status(400).json({msg: 'Bad Request, Please Fill all fields'})
    } 
    
    const pool = await getConnection();
    await pool.request()
    .input('id', sql.Int, id)
    .input('name', sql.VarChar, name)
    .input('age', sql.Int, age)
    .input('address', sql.Text, address)
    .input('condition', sql.Text, condition)
    .query(queries.updatePatientsById);

    res.json({id, name, age, address, condition});
}