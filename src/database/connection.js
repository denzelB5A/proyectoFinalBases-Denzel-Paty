import sql from 'mssql';

const dbSettings = 
{
    user: 'denzel',
    password: '012345',
    server : 'localhost',
    database: 'Consultados',
    options: 
    {
        encrypt: true,
        trustServerCertificate: true,
    }
};

async function getConnection()
{
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
}

getConnection();