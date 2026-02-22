import mongoose from "mongoose";
import  dotenv from "dotenv"
dotenv.config({quiet:true})

const dbConnect = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URL)
      console.log("Database Connected")
   } catch (error) {
      console.log("DB Error:", error.message)
   }
}

export default dbConnect;