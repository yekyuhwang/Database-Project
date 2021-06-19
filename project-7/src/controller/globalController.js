export const mainController = (req, res) => {
  const db = req.db;

  const sql = `
    SELECT    A.book_no,
  	          A.book_title,
              CONCAT(FORMAT(A.book_price, 0), '원')  AS book_price,
              B.author_name   						 AS book_author,
              C.company_name						 AS book_company,
              A.book_summary
      FROM    book  	 A
      JOIN    author     B
        ON    A.book_author = B.author_no
      JOIN    company    C
        ON    A.book_company = C.company_no
  `;

  db.query(sql, (error, rows) => {
    res.render("screens/main", { list: rows });
  });
};
