const sql = require('mssql');
const config = {
user: 'admin123',
password: 'Fernandot123',
server: 'desarrollosoftware1.database.windows.net',
database: 'Q',
options: {
trustedConnection: true
}
}
const poolPromise = new sql.ConnectionPool(config)
.connect()
.then(pool => {
console.log('Connectado a MSSQL')
return pool
})
.catch(err => console.log('Conexión a Base de Datos Falló, Error en Configuración: ', err))
module.exports = { 
sql, poolPromise
}