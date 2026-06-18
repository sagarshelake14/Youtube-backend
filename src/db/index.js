import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);

const connectDB = async () => {
         try {
                  const cleanUri = process.env.MONGODB_URI.trim();
                  const connectInstance = await mongoose.connect(`${cleanUri}/${DB_NAME}`);
         
                  console.log(`\n mongoDb connnected !! DB Host : ${connectInstance.connection.host}`);
         }
         catch(error){
                  console.log("MONGODB connection error", error);
                  process.exit(1);
         }
}
export default connectDB;