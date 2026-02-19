import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import router from "./src/routes/UserRoute.js";
import noteRoutes from "./src/routes/noteRoute.js";

const app = express();
const PORT = process.env.PORT || 1100;
import { connectDB } from "./src/config/db.js";

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/signup", (req, res) => {
  res.send("Welcome to the signup page");
});

app.use("/api/users", router);
app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Example app listening on the following port: ${PORT}`);
});
