import { Router } from "express";

export const SepomexRouter = () => {
  const sepomexRouter = Router();

  sepomexRouter.get("/", (req, res) => {
    res.status(200).send("Ok!!!");
  });

  return { sepomexRouter };
};
