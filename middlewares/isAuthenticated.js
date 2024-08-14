import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { configDotenv } from "dotenv";
import logger from "../utils/winstonLogger.js";
configDotenv();
const isAuthenticated = async (req, res, next) => {
    
  const { token } = req.signedCookies;
 
  if (token) {
    try {
      const {id} = jwt.verify(token, process.env.JWT_SECRET);
      console.log(id)
      try {
        const user = await User.findOne({_id:id});
        
        if (!user) {
          res.status(404).json({ message: "User Not Found." });
        } else {
          req.user = user;
          next();
        }
      } catch (err) {
        logger.error(`error:${err}`);
        res.status(500).json({
          message: "An internal server error occurred. Please try again later.",
        });
      }
    } catch (err) {
      logger.error(`error in isAuthenticated: ${err}`);
      if (err instanceof jwt.TokenExpiredError) {
        res
          .status(401)
          .json({ message: "Your session has expired. Please log in again." });
      } else if (err instanceof jwt.JsonWebTokenError) {
        res.status(401).json({ message: "Invalid Token." });
      } else if (err instanceof jwt.NotBeforeError) {
        res.status(401).json({ message: "token not active yet." });
      } else {
        res.sstatus(500).json({
          message: "An internal server error occurred. Please try again later.",
        });
      }
    }
  } else {
    res.status(401).send("No token provided");
  }
};

export default isAuthenticated;
