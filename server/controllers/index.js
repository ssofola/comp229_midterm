/*****************************************
 //    File Name: index.js
 // Student Name: Olusegun Sofola
 //  Description: index controller file
 //   Student ID: 301254272
 //         Date: March 3, 2023
 *****************************************/
let express = require('express');
let mongoose = require('mongoose');

// public controller function to display the homepage
module.exports.displayHomePage = function (req, res, next){
    res.render('content/index', {
        title: 'Home',
        books: ''
    });
}

