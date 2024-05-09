import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from './routes/index.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
route(app);

mongoose.connect("mongodb://localhost:27017/walmart-search");

export default app;