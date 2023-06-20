const express=require('express')
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config()
app.use(express.json()) // for parsing application/json

module.exports=app