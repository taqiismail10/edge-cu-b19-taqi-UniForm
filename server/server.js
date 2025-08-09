import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import {limiter} from "./config/rateLimit.js";
const app = express()

import fileUpload from "express-fileupload";
const PORT = process.env.PORT || 5000

// import { EventEmitter } from 'events';
// EventEmitter.defaultMaxListeners = 20; // Increase the limit to 20
// Wafi509

// * Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());
app.use(helmet());
app.use(cors());
app.use(limiter);

app.get("/", (req, res) => {
    return res.json({ message: "Hello, it's working..." });
});

import ApiRoutes from "./routes/api.js";
app.use("/api", ApiRoutes);

import adminRoutes from "./routes/adminRoutes.js";
app.use("/admin", adminRoutes);




app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))