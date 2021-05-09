import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import bodyParser from "body-parser";
import globalRouter from "./routers/glabalRouter";

const app = express();

const PORT = 3000;

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`🍀 ${PORT} PORT SERVER START!`);
});
