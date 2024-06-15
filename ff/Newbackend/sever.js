

import express from 'express';
//const app = express();
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import {app,server} from './socket/socket.js'

import authRoutes from "./Routes/auth.js"
import messageRoutes from "./Routes/message.js"
import userRoutes from "./Routes/user.js";

app.use(express.json());// bcoz req.body is null by default toh usse chnage krne k liye
app.use(cookieParser());


mongoose.connect('mongodb://127.0.0.1:27017/Farmers').then(() => {
    console.log("db Connected");
});
//const fun = require('./api');

import cors from 'cors'
import routes from "./Routes/Basic.js";
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users", userRoutes);
app.use(routes);






server.listen(8000, () => {
    console.log("server started, Have A good Day");
})