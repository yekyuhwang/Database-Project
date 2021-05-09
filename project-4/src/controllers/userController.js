import mysql from "mysql2";

const connection = mysql.createConnection({
  host: `localhost`,
  port: 3307,
  user: `root`,
  password: `fourleaf0309`,
  database: `edu`,
});

connection.connect();

export const loginController = (req, res) => {
  res.render("screens/login");
};

export const joinusController = (req, res) => {
  res.render("screens/joinus");
};

export const profileController = (req, res) => {
  const query = connection.query(
    `SELECT    name,
               gender
       FROM    emp
      WHERE    address LIKE "대전%"`,

    (error, rows) => {
      if (error) throw Error;

      res.render("screens/profile", { list: rows });
    }
  );
};

export const editController = (req, res) => {
  res.render("screens/edit");
};
