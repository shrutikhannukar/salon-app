const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // const db = process.env.MONGO_URI;
    // await mongoose.connect("mongodb+srv://nandini:nandini@cluster0.wixe7rn.mongodb.net/parlour?retryWrites=true&w=majority&appName=Cluster0");
    await mongoose.connect(
      "mongodb+srv://shrutikhannukar1020:parlour12345@parlour.k2xnzfr.mongodb.net/beautyParlourAppe"
    );
    console.log("MongoDB connected...");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
