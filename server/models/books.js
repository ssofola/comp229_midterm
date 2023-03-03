/*****************************************
 //    File Name: book.js
 // Student Name: Olusegun Sofola
 //  Description: book data model
 //   Student ID: 301254272
 //         Date: March 3, 2023
 *****************************************/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
