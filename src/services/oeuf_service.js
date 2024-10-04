const pool = require("../config/db");

async function createOeuf(data,res){
    const query = 'INSERT INTO oeuf (poule_id , date_ponte , date_eclosion , couleur ,poids , taille ) ' +
        'VALUES ($1, $2, $3, $4, $5, $6) RETURNING *'
    await pool.query(query,
        [data.poule_id,data.date_ponte,data.date_eclosion,data.couleur,data.poids,data.taille]
        ,(error, results) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Oeuf added with ID: ${JSON.stringify(results.rows[0])}`)
        })
}
async function getAllOeufs(res){
    const query = "SELECT * FROM oeuf"
    await pool.query(query,(error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
async function updateOeuf(data,res){
    console.log(data)
    const query = "UPDATE oeuf SET poule_id = $1, date_ponte = $2, date_eclosion = $3, couleur = $4,poids = $5, taille = $6 WHERE id = $7"
    await pool.query(query,[data.poule_id, data.date_ponte, data.date_eclosion, data.couleur,data.poids, data.taille,data.id],(err,result) => {
        if(err)
            throw err
        res.status(200).send(`Oeuf updated with ID: ${data.id}`)
    })
}
async function deleteOeuf(id,res){
    const query = "DELETE FROM oeuf WHERE id = $1"
    await pool.query(query,[id],(err,result) => {
        if(err)
            throw err
        res.status(200).send(`Oeuf deleted with ID: ${id}`)
    })
}

module.exports = {createOeuf,getAllOeufs,updateOeuf,deleteOeuf}