import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import logger from "../utils/winstonLogger.js";
configDotenv();
//for handling login
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.status(404).json({ message: "Account Not Found" });
    } else {
      try {
        const result = await bcrypt.compare(password, user.password);
        if (!result) {
          res.status(401).json({ message: "Incorrect Password" });
        } else {
          const token = jwt.sign(user._id, process.env.JWT_SECRET);
          res.cookie("token", token, {
            maxAge: 1000 * 86400 * 30, // cookie will expire after 30 days
            httpOnly: true, //cannot be accessed through js in client side and prevent xss attacks
            secure: process.env.NODE_ENV === "production", //  cookie will only sent over https when node env is production
            sameSite: "none", //  for Cross-Origin Requests , cookie will be sent to backend which is at different domain
            signed: true,
          });

          res.status(200).json({ message: "login successful" });
        }
      } catch (err) {
        logger.error(err);
        res.status(500).json({
          message: "An internal server error occurred. Please try again later.",
        });
      }
    }
  } catch (err) {
    logger.error(`error:${err}`);
    res.status(500).json({
      message: "An internal server error occurred. Please try again later.",
    });
  }
};

//for handling signup

const handleSignup = async (req, res) => {
  const { name, email, password, gender, dob, religion } = req.body;

  try {
    // Checking if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser&&existingUser.verified==true) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hashing the password
    const hashPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUND)
    );

    // Creating a new user instance
    const newUser = new User({
      name,
      email,
      password: hashPassword,
      gender,
      dob,
      religion,
    });

    // Saving the new user to the database
    const savedUser = await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

    // Setting the cookie with the token
    res.cookie("token", token, {
      maxAge: 1000 * 86400 * 30,
      signed: true,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
    });

    // Responding  with success ..
    res.status(201).json({ message: "User created successfully." });
  } catch (err) {
    logger.error(`Error: ${err}`);
    res.status(500).json({
      message: "An internal server error occurred. Please try again later.",
    });
  }
};

export default handleSignup;

const handleVerify = (req, res) => {
    
};

//exporting the functions
export { handleLogin, handleSignup, handleVerify };
