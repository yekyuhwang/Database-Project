import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import homeRouter from "./routers/homeRouter";
import path from "path";

const app = express();

const PORT = 3000;

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));

app.use("/", homeRouter);

app.listen(PORT, () => {
  console.log(`🍀 ${PORT} PORT SERVER START!`);
});
