/*****************************************
 //    File Name: index.js
 // Student Name: Olusegun Sofola
 //  Description: website routes
 //   Student ID: 301254272
 //         Date: March 3, 2023
 *****************************************/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

// define the controllers
let indexController = require('../controllers/index');

/* GET home page. wildcard */
router.get('/', indexController.displayHomePage);

module.exports = router;
