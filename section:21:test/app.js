const mongoose = require('mongoose')
const Book = require('./models/book')

mongoose.connect('mongodb://localhost:27017/hello-mongo',{useNewUrlParser: true},(error) => {
  if(error) {
    console.log("Unable to connect to the database")
  } else {
    console.log("Connected to the database")
  }
})

// CREATING A NEW ENTRY
const book = new Book({
  title: 'Learning backend',
  isbn: 'urrrt23uusj',
  author: 'Aino Beren'
})

book.save((error, newBook) => {
  if(error) {
    console.log(error)
  } else {
    console.log(newBook)
  }
})

// FIND ALL
Book.find({},(error, books) => {
    console.log(books)
})

// FIND BY ID
Book.findById('63ff43c10f46cbb88c51bfd0',(error, book) => {
    console.log(book)
})

// FIND ONE
Book.findOne({title: 'Learning backend'}, (error, book) => {
    console.log(book)
})

// UPDATE AN ENTRY
const updatedBook = {
    title: 'Backend for dummies',
    author: 'Aino Beren Dündar'
}

// DELETE AN ENTRY
Book.findOneAndUpdate({_id: '63ff49da11d3b0b9c3180d5b'},updatedBook,(error, result) => {
    console.log(result)
})