import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {populatePlaces} from "./controllers/placeController.js";
import placeRouter from "./routers/placeRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Welcome Route
app.get('/module-b/api/v1/', (_req, res) => {
    res.send('🚀 Welcome to the Competition WEB <dev> Challenge 2025 Node.js template!');
});

app.use("/module-b/api/v1/places", placeRouter);

// Start Server
app.listen(PORT, async () => {
    await populatePlaces();
    console.log(`🚀 Server running on http://localhost:${PORT}\n`);
});
