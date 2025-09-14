import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting db : ", error.message);
  }
}

export default connectDB;
