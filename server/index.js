import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import {connectDB} from "./mongodb/connect.js";

import postRoutes from "./routes/postRoutes.js"
import huggingFaceRoutes from "./routes/huggingFaceRoutes.js"

// Env config
dotenv.config();

// Server
const app = express();

// Middleware
app.use(cors())
app.use(express.json({ limit: '50mb'}))

// Routes
app.use("/api/v1/post", postRoutes)
app.use("/api/v1/hugging-face", huggingFaceRoutes)

// Routes
app.get('/', async (req, res) => {
    res.send("Hello");
})

// Listen to port
const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        app.listen(5000, () => {
            console.log("Server is listening to port 5000");
        })
    }
    catch (error) {
        console.error(error);
    }
}

startServer()
