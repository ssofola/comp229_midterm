/*****************************************
 //    File Name: index.js
 // Student Name: Olusegun Sofola
 //  Description: book management routes
 //   Student ID: 301254272
 //         Date: March 3, 2023
 *****************************************/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let bookModel = require('../models/books');

// get the book controller
let bookController = require('../controllers/books')

/* GET books List page. READ */
router.get('/', bookController.getBookList);

//  GET the Book Details page in order to add a new Book
router.get('/add', bookController.getAddBookPage);

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', bookController.addNewBook);

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', bookController.getEditBookPage);

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', bookController.editBook);

// GET - process delete by user id
router.get('/delete/:id', bookController.deleteBook);

module.exports = router;
