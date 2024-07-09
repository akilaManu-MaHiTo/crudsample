const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Local imports
const conDatabase = require('./database');
const USER = require('./controllers/UserController')
const EMPLOYEE = require('./controllers/EmployeeController')
const IMAGE = require ('./controllers/ImageController')
const LOGIN = require ('./controllers/LoginController')

const app = express();
app.use(cors());
app.use(express.json());

//handle routing
app.use('/',USER)
app.use('/',EMPLOYEE)
app.use('/',IMAGE)
app.use('/',LOGIN)

conDatabase()
    .then(data => {
        console.log('Database Connected...');

        const server = app.listen(3001, () => {
            console.log('Server Started at 3001');
        }).on('error', err => {
            console.log('Server not started', err);
        });

        // Export the server for use in other files
        module.exports = server;
    })
    .catch(err => console.log('Database connection error:', err));
