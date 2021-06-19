import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import globalRouter from "./router/globalRouter";

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`🍀${PORT} SERVER START!`);
});
