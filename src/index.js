// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server i running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("DB connection failed!! : ", err));

/*
- First Approach to connect mongoDB
import mongoose from "mongoose";
import { DB_NAME } from "./constant";
import express from "express";

const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    app.on("error", (err) => console.log(err.message));

    app.listen(process.env.PORT, () =>
      console.log(`App is listing on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error.message);
  }
})();
*/
