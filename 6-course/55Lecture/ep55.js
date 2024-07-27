const {model,Schema} = require("mongoose");

const BookSchema = new Schema({
  isbn: {type: String, required:true, unique:true},
  title: {type: String, required:true},
  author: {type: String, required:true},
  totalQuantity: {type: Number, min:0, default: 1},
  issuedQuantity: {
    type: Number, min: 0, default: 0, validate: {validator(value){
      return this.get("totalQunatity") >= value;
    },},
  },
  price: {type: Number, min:1, required:true},
});

const Book = model("Book", BookSchema);

module.exports = Book;

const InputValidationException = require("../exceptions/InputValidationException");

const addBook  = async (req,res) =>{
  try{
    const book = new Book({...req.body});
    await book.save();
    return res.status(201).send(book);
  }catch(err){
    console.error(err);
    return res.status(err instanceof InputValidationException ? 400:500).send({message: err.message});
  }
};

const getAllBooks = async (req,res) =>{
  try{
    const bookList = await Book.find();
    return res.status(200).send(bookList);
  }catch(err){
    console.error(err);
    return res.status(500).send({message: err.message});
  }
};

module.exports = {addBook,getAllBooks};

const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book-controller");

router.post("/add",bookController.addBook);
router.get("/all",bookController.getAllBooks);

module.exports = router;

const librarianMiddleware = (req,res,next)=>{
  if(req.user.type!=="LIBRARIAN"){
    return res.status(403).send({message: "You are not authorised to do this task."});
  }
  next();
};

module.exports = {librarianMiddleware};