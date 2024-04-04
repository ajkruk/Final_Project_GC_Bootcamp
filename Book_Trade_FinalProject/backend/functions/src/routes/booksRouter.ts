import express from "express";
import { getClient } from '../db'
import { ObjectId } from "mongodb";
import BookListing from "../models/BookListing";

const booksRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({message: "Internal Server Error"})
}

// getting book results
booksRouter.get("/", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<BookListing>("Books2Trade").find();
    const results = await cursor.toArray();
    res.status(200).json(results);
  } catch (err) {
    errorResponse(err, res);
  }
 });

// getting books by object id, assigned by mongodb
booksRouter.get("/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const client = await getClient();
    const books = await client.db().collection<BookListing>("Books2Trade")
        .findOne({ _id });
    if (books) {
      res.status(200).json(books);
    } else {
      res.status(404).json({message: "Not Found"});
    }
  } catch (err) { console.log("error") }
 });

// getting books by specific owner id from mongodb
 booksRouter.get("/owner/:id", async (req, res) => {
  try {
    const client = await getClient();
    const books = await client.db().collection<BookListing[]>("Books2Trade").find({ owner: req.params.id }).toArray();
    console.log(books)
    if (books) {
      res.status(200).json(books);
    } else {
      res.status(404).json({message: "Not Found"});
    }
  } catch (err) { console.log("error") }
 });

// adding a new book to a collection 
booksRouter.post("/", async (req, res) => {
  try {
    const books: BookListing = req.body;
    const client = await getClient();
    await client.db()
        .collection<BookListing>("Books2Trade")
        .insertOne(books);
    res.status(201).json(books);
  } catch (err) { console.log("error") }
 });

// allows you to make changes/updates to document in your database
booksRouter.put("/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const updatedBook: BookListing = req.body;
    delete updatedBook._id; // remove _id from body so we only have one.
    const client = await getClient();
    const result = await client.db().collection<BookListing>("Books2Trade")
        .replaceOne({ _id }, updatedBook);
    if (result.modifiedCount) {
      updatedBook._id = _id;
      res.status(200).json(updatedBook);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (err) { console.log("error") }
 });

// allows you to remove books from your collection 
booksRouter.delete("/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const client = await getClient();
    const result = await client.db().collection<BookListing>("Books2Trade")
        .deleteOne({ _id });
    if (result.deletedCount) {
      res.sendStatus(204);
    } else {
      res.status(404).json({message: "Not Found"});
    }
  } catch (err) {console.log("error")}
 });

export default booksRouter;
