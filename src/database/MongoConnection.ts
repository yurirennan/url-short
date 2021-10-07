import mongoose from "mongoose";

class MongoConnection {
  async connect(): Promise<void> {
    try {
      await mongoose.connect(String(process.env.MONGO_URL));
    } catch (error) {
      console.log(error);
    }
  }  
}

export { MongoConnection };