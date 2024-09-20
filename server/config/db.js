import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(proccess.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB is connected !");
    } catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit(1);
    }
}