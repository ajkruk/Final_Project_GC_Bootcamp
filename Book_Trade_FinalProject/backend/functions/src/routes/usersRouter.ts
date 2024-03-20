import express from "express";
import { ObjectId } from "mongodb";
import User from "../models/User";
import { getClient } from '../db'

const usersRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

usersRouter.get("/", async (req, res) => {
    try {
      const client = await getClient();
      const cursor = client.db().collection<User>("User2Trade").find();
      const results = await cursor.toArray();
      res.status(200).json(results);
    } catch (err) {
      errorResponse(err, res);
    }
   });

   usersRouter.get("/:id", async (req, res) => {
    try {
      const _id: ObjectId = new ObjectId(req.params.id);
      const client = await getClient();
      const user = await client.db().collection<User>("User2Trade")
          .findOne({ _id });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({message: "Not Found"});
      }
    } catch (err) { console.log("error") }
   });

   usersRouter.post("/", async (req, res) => {
    try {
      const user: User = req.body;
      const client = await getClient();
      await client.db()
          .collection<User>("User2Trade")
          .insertOne(user);
      res.status(201).json(user);
    } catch (err) { console.log("error") }
   });

   usersRouter.put("/:id", async (req, res) => {
    try {
      const _id: ObjectId = new ObjectId(req.params.id);
      const updatedUser: User = req.body;
      delete updatedUser._id; // remove _id from body so we only have one.
      const client = await getClient();
      const result = await client.db().collection<User>("User2Trade")
          .replaceOne({ _id }, updatedUser);
      if (result.modifiedCount) {
        updatedUser._id = _id;
        updatedUser.first_name;
        updatedUser.last_name;
        updatedUser.user_name;
        updatedUser.email;
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: "Not Found" });
      }
    } catch (err) { console.log("error") }
   });

   usersRouter.delete("/:id", async (req, res) => {
    try {
      const _id: ObjectId = new ObjectId(req.params.id);
      const client = await getClient();
      const result = await client.db().collection<User>("User2Trade")
          .deleteOne({ _id });
      if (result.deletedCount) {
        res.sendStatus(204);
      } else {
        res.status(404).json({message: "Not Found"});
      }
    } catch (err) { console.log("error") }
   });

export default usersRouter;