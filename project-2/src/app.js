import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import pageRouter from "./routers/pageRouter";

const app = express();

const PORT = 3000;

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan(`dev`));

app.use("/", pageRouter);

app.listen(PORT, () => {
  console.log(`🍀 ${PORT} SERVER START!`);
});
