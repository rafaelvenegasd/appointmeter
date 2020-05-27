const express = require('express');
const router = express.Router();
const bodyPraser = require('body-parser')
const cors = require('cors');
const app = express();
require('dotenv').config();

//Middlewares
app.use(bodyPraser.json());
app.use(cors());

app.use(express.static(__dirname + '/public/'));
const serveFiles = require('./routes');
app.use('/', serveFiles)



// Connect server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
