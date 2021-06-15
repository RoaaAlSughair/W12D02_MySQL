const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();
const db = require("./db");

const app = express();
app.use(express.json());

app.post("/books", (req, res) => {
    const {title, author, published_at, price} = req.body;
    const query = `INSERT INTO books (title, author, published_at, price) VALUES (?, ?, ?, ?);`;
    const data = [title, author, published_at, price];
    connection.query(query, data, (error, result) => {
      if (error) {
          throw error;
      }

      res.status(201);
      res.json(result);
})
});

app.get("/books", (req, res) => {
    const query = `SELECT * FROM books;`;
    connection.query(query, (error, result) => {
      if (error) {
          throw error;
      }

      res.status(200);
      res.json(result);
})
});

app.listen(process.env.PORT, () => {
    console.log("The server is listening at port:", process.env.PORT);
})