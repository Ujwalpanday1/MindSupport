import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import logger from "../utils/winstonLogger.js";

configDotenv();

const connectDb=()=>{
    mongoose.connect(process.env.MONGOOSE_URI,{
        dbName:'MindSupport'
      }).then((data)=>{
        logger.info(`connected to database with name : ${data.connection.name}`)
    }).catch((e)=>{
        logger.error("error: ",e)
    })
}

export default connectDb