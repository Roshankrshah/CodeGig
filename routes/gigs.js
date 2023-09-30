const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

router.get('/', async (req,res)=>{
    try{
        const gigs = await Gig.findAll({ raw: true });
        res.render('gigs',{
            gigs,
        });
    }catch(err){
        console.log(err);
    }    
});

router.get('/add',(req,res)=>{
    res.render('add');
})

router.post('/add',async (req,res)=>{
    const data = {
        title: 'Simple Wordpress Website',
        technologies: 'wordpress, php,html,css',
        budget: '300',
        description: 'lorem ipsum',
        contact_email: 'test2@email.com'
    }

    let {title, technologies, budget, description, contact_email} = data;

    try {
        await Gig.create({
            title,
            technologies,
            budget,
            description,
            contact_email
        });

        res.redirect('/gigs');
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;