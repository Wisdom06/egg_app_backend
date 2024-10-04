const pool = require("../config/db");

async function createEtat(data,res){
    const query = 'INSERT INTO etat (oeuf_id,jour,status,observations,temperature,humidite ) ' +
        'VALUES ($1, $2, $3, $4, $5, $6) RETURNING *'
    await pool.query(query,
        [data.oeuf_id,data.jour,data.status,data.observations,data.temperature,data.humidite]
        ,(error, results) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Etat added with ID: ${JSON.stringify(results.rows[0])}`)
        })
}
async function getAllEtats(res){
    const query = "SELECT * FROM etat"
    await pool.query(query,(error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
async function updateEtat(data,res){
    console.log(data)
    const query = "UPDATE etat SET oeuf_id = $1, jour = $2, status = $3, observations = $4,temperature = $5, humidite = $6 WHERE id = $7"
    await pool.query(query,[data.oeuf_id, data.jour, data.status, data.observations,data.temperature, data.humidite,data.id],(err,result) => {
        if(err)
            throw err
        res.status(200).send(`Etat updated with ID: ${data.id}`)
    })
}
async function deleteEtat(id,res){
    const query = "DELETE FROM etat WHERE id = $1"
    await pool.query(query,[id],(err,result) => {
        if(err)
            throw err
        res.status(200).send(`Etat deleted with ID: ${id}`)
    })
}

module.exports = {createEtat,getAllEtats,updateEtat,deleteEtat}