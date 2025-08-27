

import express from "express"
import jwt from "jsonwebtoken";
export const varifyToken = (req, res, next)=>{


  try {
    const token = req.headers.authorization;

    if(!token){
       return res.json({success:false, message:"no token provided"})
    }

    //if i don't use bearer in frontend in headers authorization , i donot need split token
const authToken = token.split(" ")[1]

if(!authToken){
   return res.json({success:false, message: "token is missing"})
}

const isTokenMatch = jwt.verify(authToken, process.env.JWT_SECRET )
if(!isTokenMatch){
   return res.json({success: false, message:"token is unvalid"})
} 

req.user = isTokenMatch

next();
} catch (error) {
    res.json({message:error.message})
}
  
}



