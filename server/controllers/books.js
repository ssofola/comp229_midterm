/*****************************************
 //    File Name: books.js
 // Student Name: Olusegun Sofola
 //  Description: books controller file
 //   Student ID: 301254272
 //         Date: March 3, 2023
 *****************************************/
let express = require('express');
let mongoose = require('mongoose');

// define the book model
let Book = require('../models/books');

// public controller function to get the book list
module.exports.getBookList = function (req, res, next){
    // find all books in the books collection
    Book.find( (err, books) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('books/index', {
                title: 'Books',
                books: books
            });
        }
    });
}

module.exports.getAddBookPage = function (req, res, next){
    let newBook = Book({
        Title: '',
        Description: '',
        Price: 0.0,
        Author: '',
        Genre: ''
    });
    res.render('books/details',{title:'Add Book', books: newBook});
}

module.exports.addNewBook =  function (req, res, next){
    let newBook = Book({
        "Title": req.body.title,
        "Description": req.body.description,
        "Price": req.body.price,
        "Author": req.body.author,
        "Genre": req.body.genre
    });
    Book.create(newBook,(err,Book) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/books');
        }
    });
}

module.exports.getEditBookPage = function (req,res,next) {
    let id = req.params.id;
    Book.findById(id,(err,bookToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            // show the edit view
            res.render('books/details',{title:'Edit Book', books: bookToEdit});
        }
    });
}

module.exports.editBook = function (req,res,next) {
    let id = req.params.id;
    let updatedBook = Book({
        "_id": id,
        "Title": req.body.title,
        "Description": req.body.description,
        "Price": req.body.price,
        "Author": req.body.author,
        "Genre": req.body.genre
    });
    Book.updateOne({_id: id}, updatedBook,(err) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            // show the edit view
            res.redirect('/books');
        }
    });
}

module.exports.deleteBook = function (req,res,next) {
    let id = req.params.id;
    Book.remove({_id:id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            // show the edit view
            res.redirect('/books');
        }
    })
}