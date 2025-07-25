import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/connection.js";
import users from "./routes/users.js";
import posts from "./routes/posts.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

