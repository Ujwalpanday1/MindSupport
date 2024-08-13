import express from "express"
import { createServer } from "http"
import { configDotenv } from "dotenv";
import logger from "./utils/winstonLogger.js";
import connectDb from "./config/configDB.js";
import authRouter from "./Routes/authRoutes.js"
import userRouter from "./Routes/userRoutes.js"
import cookieParser from "cookie-parser";

configDotenv();//loads variable in .env file in process.env

connectDb()// connecting to database 

const app=express(); //creating server with express
const server=createServer(app);   //creating server with http so that we can have more controll and combine it will web socket


app.use(cookieParser(process.env.COOKIE_SECRET))
app.use("/",authRouter);
app.use("/",userRouter)

server.listen(process.env.PORT,()=>{
    logger.info(`server running in port : ${process.env.PORT}`)
})
