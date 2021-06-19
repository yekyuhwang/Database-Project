import mysql from "mysql2";

const dbConnect = (req, res, next) => {
  const db = mysql.createConnection({
    host: `127.0.0.1`,
    user: `root`,
    password: `fourleaf0309`,
    port: `3307`,
    database: `honya`,
  });

  req.db = db;

  next();
};

export default dbConnect;
