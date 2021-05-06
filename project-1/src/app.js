import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import mysql from "mysql2";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

const PORT = 3000;

function sayHello() {
  console.log(`Hello Yekyu!`);
}

sayHello();

const connection = mysql.createConnection({
  host: `localhost`,
  port: 3307,
  user: `root`,
  password: `fourleaf0309`,
  database: `edu`,
});

connection.connect();

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan(`dev`));

app.get("/db_main", (req, res) => {
  const query = connection.query(
    `SELECT    e_no
               m_no,
               name,
               CONCAT(SUBSTRING(mobile, 1,3),"-",SUBSTRING(mobile, 4,4),"-",SUBSTRING(mobile, 8,4)) as mobile,
               gender,
               post_code,
               address,
               detail_address,
               DATE_FORMAT(birth, "%Y-%m-%d") as birth
       FROM    emp`,
    (error, rows) => {
      if (error) throw Error;
      res.render("db_main", { list: rows });
    }
  );
});

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

app.listen(PORT, () => {
  console.log(`🍀 ${PORT} SERVER START !`);
});
