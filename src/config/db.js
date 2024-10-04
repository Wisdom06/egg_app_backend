const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    database: 'egg_management',
    port: 5432,
})
pool.connect((err, client, release) => {
    if (err){
        console.log("connection echouee")
        return
    }
    console.log('Connected to the PostgreSQL database');
});

module.exports = pool