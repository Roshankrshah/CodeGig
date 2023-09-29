const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

router.get('/',async (req,res)=>{
    try{
        const gigs = await Gig.findAll();
        console.log(gigs);
    }catch(err){
        console.log(err);
    }
    res.sendStatus(200);
})

module.exports = router;