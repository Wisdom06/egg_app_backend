const express = require('express')
const Poule = require("../models/poule");
const pool = require('../config/db')
const {createPoule, getAllPoules, updatePoule, deletePoule} = require("../services/poule_service");

const router = express.Router()

router.post('/createPoul' +
    'e',async (req, res) =>{
    try{
        let poule = req.body;
        await createPoule(poule,res);
    }
    catch (err){
        console.log("You have an error")
        res.status(500).send("Server error");
    }

    }

)
router.get('/getAllPoules',async (req,res)=>{
    try{
        await getAllPoules(res)
    }
    catch(err){
        console.error(err.message)
    }
})

router.put('/updatePouleById/:id', async (req,res)=>{
    const id = parseInt(req.params.id)
    const {nom, date_arrivee, couleur, statut_sante,date_naissance, alimentation,race} = req.body
    const poule = new Poule(id,nom, date_arrivee, couleur, statut_sante,date_naissance, alimentation,race)
    try {
        await updatePoule(poule,res)
    }
    catch(err){
        console.error(err.message)
    }
})

router.delete('/deletePouleById/:id', async (req,res)=>{
    const id = parseInt(req.params.id)
    try {
        await deletePoule(id, res)
    }
    catch(err){
        console.error(err.message)
    }
})

module.exports = router
