import express from "express"
import User from "/models/User"

const app = express();
const PORT = 4000
app.use(express.json())

app.post("/", async (req, res)=>{
try {
    const {email, password} = req.body

    const user = await User.findOne({email})
    if (!user){
        res.json({message: "user is not exist"})
    }

    const ismatch = await bcrypt.compare(password, user.password);
    if(!ismatch){
        res.json({message: "password is in correct"} )
    }

    res.json({message: "login successfully ", user})
    res.send("connected")
} catch (error) {
    res.json({message: "internal code error", error})
}
    
})


app.listen(PORT, ()=>{
    console.log(`the server is running on port: ${PORT}`)
})