import express from "express";
import { createServer } from "http";
import { configDotenv } from "dotenv";
import logger from "./utils/winstonLogger.js";
import connectDb from "./config/configDB.js";
import authRouter from "./Routes/authRoutes.js";
import userRouter from "./Routes/userRoutes.js";
import cookieParser from "cookie-parser";

configDotenv(); //loads variable in .env file in process.env

connectDb(); // connecting to database

const app = express(); //creating server with express
const server = createServer(app); //creating server with http so that we can have more controll and combine it will web socket

//middlewares
app.use(cookieParser(process.env.COOKIE_SECRET)); //parse the cookie sent with request and make it available in req.signedCookies, signed because we have given secret
app.use(express.urlencoded({ extended: true })); //parse the data with header content-type :application/x-www-form-urlencoded  and data will be available in req.body
app.use(express.json({ extended: true })); // parse the structured data with header content-type:application/json and data will be available in req.body

//Routes
app.use("/", authRouter);
app.use("/", userRouter);

server.listen(process.env.PORT, () => {
  logger.info(`server running in port : ${process.env.PORT}`);
});
