const pool = require("../config/db");

async function createPoule(data,res){
    const query = 'INSERT INTO poule (nom, date_arrivee, couleur, statut_sante,date_naissance, alimentation,race) ' +
        'VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *'
    await pool.query(query,
        [data.nom,data.date_arrive,data.couleur,data.statut_sante,data.date_naissance,data.alimentation,data.race]
        ,(error, results) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Poule added with ID: ${JSON.stringify(results.rows[0])}`)
        })
}
async function getAllPoules(res){
    const query = "SELECT * FROM poule"
    await pool.query(query,(error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
async function updatePoule(data,res){
    console.log(data)
    const query = "UPDATE poule SET nom = $1, date_arrivee = $2, couleur = $3, statut_sante = $4,date_naissance = $5, alimentation = $6, race = $7 WHERE id = $8"
    await pool.query(query,[data.nom, data.date_arrivee, data.couleur, data.statut_sante,data.date_naissance, data.alimentation,data.race,data.id],(err,result) => {
        if(err)
            throw err
        res.status(200).send(`Poule updated with ID: ${data.id}`)
    })
}
async function deletePoule(id,res){
    const query = "DELETE FROM poule WHERE id = $1"
    await pool.query(query,[id],(err,result) => {
        if(err)
            throw err
        res.status(200).send(`Poule deleted with ID: ${id}`)
    })
}

module.exports = {createPoule,getAllPoules,updatePoule,deletePoule}