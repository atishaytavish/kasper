import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usersRoute from "./routes/user.js";
import deviceRoute from "./routes/device.js";
import roomsRoute from "./routes/room.js";
const app = express();

dotenv.config();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
};

app.use(express.json());


app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/device", deviceRoute);


app.listen(8800 ,()=>{
    connect();
    console.log("Backend Connected");
})