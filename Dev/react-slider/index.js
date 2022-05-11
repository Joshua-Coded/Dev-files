import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import colors from 'colors';


const app = express()
dotenv.config()


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log(' DB Connected')
    } catch (error) {
        throw error
    }
}

mongoose.connection.on('disconnected', () => {
    console.log("mongoDB Disconnected!")
})


mongoose.connection.on('connected', () => {
    console.log("mongoDB Connected!")
})

app.listen(5000, () => {
    connect()
    console.log("server running on port 5000!!")
})