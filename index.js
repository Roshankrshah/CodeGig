const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/',(req,res)=>{
    res.send('Starting codegig project');
})
const PORT = process.env.PORT || 2100;

app.listen(PORT,()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
});