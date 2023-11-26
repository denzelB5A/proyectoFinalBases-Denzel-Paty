export const queries =
{
    getAllPatients: 
    'SELECT * FROM Patient',
    addNewPatient: 
    'INSERT INTO Patient (id, name, age, address, condition) VALUES (@id, @name, @age, @address, @condition)',
    getPatientById: 
    'SELECT * FROM Patient Where id = @id',
    deleteProduct: 
    "DELETE FROM [Consultados].[dbo].[Patient] WHERE id = @id",
    getTotalPatients: 
    "SELECT COUNT (*) FROM Patient",
    updatePatientsById: 
    "UPDATE Patient SET name = @name, age = @age, address = @address, condition = @condition WHERE id = @id",
}