import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

//Routes
import playersRoutes from "./src/routes/players.route.js";
import questionsRoutes from "./src/routes/questions.route.js";

mongoose.set('strictQuery', true);

const app = express();

const whiteList = [
    process.env.ORIGIN1,
    process.env.ORIGIN2,
    process.env.ORIGIN3,
];

app.use(
    cors({
        origin: function (origin, callback) {
            console.log("Here =>", origin);
            if (!origin || whiteList.includes(origin)) {
                return callback(null, origin);
            }
            return callback(
                "CORS origin ERROR: " + origin + " Unauthorize!"
            );
        },
        credentials: true,
        exposedHeaders: ['set-cookie']
    })
);


app.use(express.json());

app.use(express.urlencoded({
    extended: true,
}));


// Routes
app.use("/api/v1/players", playersRoutes);
app.use("/api/v1/questions", questionsRoutes);


// Start Server
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => console.log("---------- Listening http://localhost:" + PORT));
