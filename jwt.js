import jwt from "jsonwebtoken";

export const login = (req, res)=>{
    try {
        const {id} = req.body;

        const token = jwt.sign({_id:id}, process.env.JWT_SECRET, {expiresIn:'7d'})
       return res.status(200).json({ token });
    } catch (error) {
        console.error(error.message)
    }
}