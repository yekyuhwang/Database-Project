import mysql from "mysql2";

const connection = mysql.createConnection({
  host: `localhost`,
  port: 3307,
  user: `root`,
  password: `fourleaf0309`,
  database: `edu`,
});

connection.connect();

export const page1Controller = (req, res) => {
  const query = connection.query(
    `SELECT    e_no,
               m_no,
               name,
               gender,
               CONCAT(SUBSTRING(mobile, 1,3),"-",SUBSTRING(mobile, 4,4),"-",SUBSTRING(mobile, 8,4)) as mobile,
               DATE_FORMAT(birth, "%Y-%m-%d") AS birth
         FROM  emp
        WHERE  address LIKE "대전%"
        ORDER  BY e_no ASC`,

    (error, rows) => {
      if (error) throw Error;

      res.render("page1", { list: rows });
    }
  );
};

export const page2Controller = (req, res) => {
  const query = connection.query(
    `SELECT    e_no,
               m_no,
               name,
               gender,
               CONCAT(SUBSTRING(mobile, 1,3),"-",SUBSTRING(mobile, 4,4),"-",SUBSTRING(mobile, 8,4)) as mobile,
               DATE_FORMAT(birth, "%Y-%m-%d") AS birth
         FROM  emp
        WHERE  gender LIKE "여성"`,

    (error, rows) => {
      if (error) throw Error;

      res.render("page2", { list: rows });
    }
  );
};

export const page3Controller = (req, res) => {
  const query = connection.query(
    `SELECT    e_no,
               m_no,
               name,
               gender,
               CONCAT(SUBSTRING(mobile, 1,3),"-",SUBSTRING(mobile, 4,4),"-",SUBSTRING(mobile, 8,4)) as mobile,
               DATE_FORMAT(birth, "%Y-%m-%d") AS birth
         FROM  emp
        WHERE  gender LIKE "남성"`,

    (error, rows) => {
      if (error) throw Error;

      res.render("page3", { list: rows });
    }
  );
};
