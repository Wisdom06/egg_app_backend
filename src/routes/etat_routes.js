const express = require('express')
const pool = require('../config/db')
const Etat = require("../models/etat");
const {createEtat, getAllEtats, updateEtat, deleteEtat} = require("../services/etat_service");

const router = express.Router()

router.post('/createEtat',async (req, res) =>{
        try{
            let poule = req.body;
            await createEtat(poule,res);
        }
        catch (err){
            console.log("You have an error")
            res.status(500).send("Server error");
        }

    }

)
router.get('/getAllEtats',async (req,res)=>{
    try{
        await getAllEtats(res)
    }
    catch(err){
        console.error(err.message)
    }
})

router.put('/updateEtatById/:id', async (req,res)=>{
    const id = parseInt(req.params.id)
    const {oeuf_id, jour, status,observations, temperature,humidite} = req.body
    const oeuf = new Etat(id,oeuf_id, jour, status,observations, temperature,humidite)
    try {
        await updateEtat(oeuf,res)
    }
    catch(err){
        console.error(err.message)
    }
})

router.delete('/deleteEtatById/:id', async (req,res)=>{
    const id = parseInt(req.params.id)
    try {
        await deleteEtat(id, res)
    }
    catch(err){
        console.error(err.message)
    }
})

module.exports = router;



