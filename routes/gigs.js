const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');
const {Op} = require('sequelize');

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
    let {title, technologies, budget, description, contact_email} = req.body;
    let errors = [];

    if(!title){
        errors.push({text: 'Please add a title'});
    }
    if(!technologies){
        errors.push({text: 'Please add a technologies'});
    }
    if(!description){
        errors.push({text: 'Please add a description'});
    }
    if(!contact_email){
        errors.push({text: 'Please add a contact email'});
    }

    if(errors.length > 0){
        res.render('add',{
            errors,
            title,
            technologies,
            budget, 
            description,
            contact_email
        })
    }else{
        if(!budget){
            budget = 'Unknown';
        }else{
            budget = `₹${budget}`;
        }

        technologies = technologies.toLowerCase().replace(/, /g,',');
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
    }
});

router.get('/search', async (req,res)=>{
    let { term } = req.query;

    term = term.toLowerCase();
    try {
        const gigs = await Gig.findAll({where: {technologies: {[Op.like]: '%'+ term + '%'}}, raw: true});
        res.render('gigs',{gigs});
    } catch (error) {
        console.log(error);
    }

})

module.exports = router;