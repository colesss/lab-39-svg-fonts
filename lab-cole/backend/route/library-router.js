'use strict';

const express = require('express');
const jsonParser = require('body-parser').json();
const Book = require('../model/book.js');

const libraryRouter = module.exports = express.Router();

libraryRouter.post('/books', jsonParser, (req, res, next) => {
  if(!req.body.title) return res.status(400).send('Error, no book title given.');
  let newBook = new Book(req.body);
  newBook.save()
    .then(res.send.bind(res))
    .catch(next);
});

libraryRouter.get('/books', (req, res, next) => {
  Book.find({})
    .then(res.send.bind(res))
    .catch(next);
});

libraryRouter.get('/books/:id', (req, res, next) => {
  Book.findOne({_id: req.params.id})
    .then(book => {
      if(book === null) res.status(404).send('Error, book does not exist.');
      res.status(200).send(book);
    })
    .catch(next);
});

libraryRouter.delete('/books/:id', (req, res, next) => {
  Book.remove({_id: req.params.id})
    .then(res.status(200).send('Success, book deleted.'))
    .catch(next);
});
