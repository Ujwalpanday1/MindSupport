import mongoose from "mongoose";



const userSchema=new mongoose.Schema({
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    lastSad: { type: Date },
    lastHappy: { type: Date },
    lastAnxious: { type: Date }, 
    lastAngry: { type: Date },
    last5: [{ type: String }],
    currentScore: { type: Number },
    currentMode: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, select: false, required: true },
    religion:{type:"string",},
    gender:{type:"string"},
    verified:{type:Boolean,default:false}
})

const User=mongoose.model("User",userSchema);

export default User;