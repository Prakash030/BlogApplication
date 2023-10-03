const express = require('express');

const app = express();
require('dotenv').config();
require('./db.js');

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.json({message: "Running..."});
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

