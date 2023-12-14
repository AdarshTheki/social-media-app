import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDb connected !! DB host: ${response.connection.host}`);
  } catch (error) {
    console.log(`MongoDB connection error >> ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
