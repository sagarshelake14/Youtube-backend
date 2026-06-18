import 'dotenv/config';
import connectDB from "./db/index.js";
//require('dotenv').config({path: './env'});   //code will be run but it distrubs a code consistency 


import dotenv from "dotenv";    // So better approch
dotenv.config({
    path: './env'
});


connectDB();






/*  
*********************************************************************
Approch 1 : Database connection + server creation using express 

cons:
         index.js file will be polluted

         so,
         We use approch 2

**********************************************************************
import express from "express";
const app = express();

// IIFE function

;(async () => {
         try{
                 await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`);
                 app.on("error", (error)=>{
                           console.log("ERROR: ",error);
                           throw error;
                 })

                 app.listen(process.env.PORT, ()=>{
                           console.log(`App is listening on port ${process.env.PORT}`);
                 })
         }
         catch(error){
                  console.log("ERROR:", error);
                  throw err;
         }        
})();

*/