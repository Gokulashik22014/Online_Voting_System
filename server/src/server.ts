import express, { RequestHandler } from "express"
import dotenv from "dotenv"
//configuring the server
dotenv.config()
const app=express()
app.use(express.json())
const PORT:number = parseInt(process.env.PORT as string) || 3000
app.get("/",(req,res)=>{
    res.json({message:"Hello world"})
})
app.listen(PORT,()=>console.log(`Server is listening at port ${PORT}....`))