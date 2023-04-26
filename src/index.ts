import express, { Express, json, urlencoded } from "express";
import mysql from "mysql";
import { SepomexRouter } from "./routes/sepomex";
// Validamos que no se encuentre en producción
if (process.env.NODE_ENV !== "PROD") require("dotenv").config();

const PORT = process.env.PORT || 3001;
const MODE = process.env.NODE_ENV || "Empty";

const app: Express = express();
const cors = require("cors");
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());

app.get("/", (req, res) => {
  const mySQLConnector = mysql.createConnection({
    host: process.env.DBSERVER,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
  });
  try {
    mySQLConnector.connect((err) => {
      if (err) throw err;
      console.log("Connected!!");
      mySQLConnector.query(
        "SELECT * FROM CatalogoSepomex LIMIT 10;",
        (err, result) => {
          if (err) throw err;
          console.log(result);
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
  res.send("Hello Curso Node!");
});

app.use("/sepomex", SepomexRouter().sepomexRouter);

app.listen(PORT, () =>
  console.log(`Server running in ${PORT} in mode: ${MODE}`)
);
