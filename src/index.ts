import express from "express";
import dontenv from "dotenv";

dontenv.config();

const PORT = process.env.PORT || 4000;

import connectDB from "./config/db";
import { errorHandler } from "./middleware/errorMiddleware";
import gameSessions from "./routes/gameSessions";

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/game-sessions", gameSessions);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started from port: ${PORT}`));
