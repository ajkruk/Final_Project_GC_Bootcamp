import express from "express";
import { ObjectId } from "mongodb";
import BookListing from "../models/BookListing";

const booksRouter = express.Router();

const listings: BookListing[] = [];

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

booksRouter.get("/BookTrade", async (req, res) => {
  try {
    res.status(200).json(listings);
  } catch (err) {
    errorResponse(err, res);
  }
});

booksRouter.get("/BookTrade/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const result: BookListing | undefined = listings.find((item) =>
      item._id?.equals(_id)
    );
    if (result) {
      res.status(200);
      res.json(result);
    } else {
      res.status(404).send(`Title not found`);
    }
  } catch (err) {
    errorResponse(err, res);
  }
});

booksRouter.post("/BookTrade", async (req, res) => {
  try {
    const newListing: BookListing = req.body;
    newListing._id = new ObjectId();
    listings.push(newListing);
    res.status(201).json(newListing);
  } catch (err) {
    errorResponse(err, res);
  }
});

booksRouter.put("/BookTrade/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const listing: BookListing = req.body;
    listing._id = new ObjectId(listing._id);
    const index: number = listings.findIndex((item) => item._id?.equals(_id)); //this is not working
    if (index !== -1) {
      listings[index] = listing;
      res.status(200);
      res.json(listing);
    } else {
      res.status(404);
      res.send(`Book not found`);
    }
  } catch (err) {
    errorResponse(err, res);
  }
});

booksRouter.delete("/BookTrader/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const index: number = listings.findIndex((item) => item._id?.equals(_id));
    if (index !== -1) {
      listings.splice(index, 1);
      res.sendStatus(204);
    } else {
      res.status(404);
      res.send("Book not found");
    }
  } catch (error) {
    errorResponse(error, res);
  }
});

export default booksRouter;