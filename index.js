require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database')

db.authenticate()
    .then(()=> console.log('Database connected...'))
    .catch(err=> console.log('Error:' + err))

const app = express();

app.get('/',(req,res)=>{
    res.send('Starting codegig project');
})
const PORT = process.env.PORT || 2100;

app.listen(PORT,()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
});