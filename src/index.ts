import express, { Express, json, urlencoded } from "express";
import { AreaRouter } from "./routes/area";
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
  res.send("Hello Curso Node!");
});

app.use("/sepomex", SepomexRouter().sepomexRouter);
app.use("/areas", AreaRouter().areaRouter);

app.listen(PORT, () =>
  console.log(`Server running in ${PORT} in mode: ${MODE}`)
);
