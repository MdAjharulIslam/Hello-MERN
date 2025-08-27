

import express from "express"
export const varifyToken = (req, res, next)=>{


  try {
    const token = req.headers.authorization;

    if(!token){
       return res.json({success:false, message:"np token provided"})
    }

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



