import User from "../models/user.js";

//for handling login 
const handleLogin=(req,res)=>{
    const {email,password}=req.body;
    try{
        User.findOne({email})
    }
    catch(err){
        
    }
}

//for handling signup 
const handleSignup=(req,res)=>{

}
const handleVerify=(req,res)=>{

}

//exporting the functions 
export {handleLogin,handleSignup,handleVerify}