const express = require('express')
const pool = require('../config/db')
const {createOeuf, getAllOeufs, updateOeuf, deleteOeuf} = require("../services/oeuf_service");
const Poule = require("../models/poule");

const router = express.Router()

router.post('/createOeuf',async (req, res) =>{
        try{
            let poule = req.body;
            await createOeuf(poule,res);
        }
        catch (err){
            console.log("You have an error")
            res.status(500).send("Server error");
        }

    }

)
router.get('/getAllOeufs',async (req,res)=>{
    try{
        await getAllOeufs(res)
    }
    catch(err){
        console.error(err.message)
    }
})

router.put('/updateOeufById/:id', async (req,res)=>{
    const id = parseInt(req.params.id)
    const {poule_id, date_ponte, date_eclosion,couleur, poids,taille} = req.body
    const oeuf = new Oeuf(id,poule_id, date_ponte, date_eclosion,couleur, poids,taille)
    try {
        await updateOeuf(oeuf,res)
    }
    catch(err){
        console.error(err.message)
    }
})

router.delete('/deleteOeufById/:id', async (req,res)=>{
    const id = parseInt(req.params.id)
    try {
        await deleteOeuf(id, res)
    }
    catch(err){
        console.error(err.message)
    }
})

module.exports = router;



