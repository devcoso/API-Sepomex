import { Router } from "express";
import { getListStates, getSepomexResponse } from "../infrastructure/sepomex";

export const SepomexRouter = () => {
  const sepomexRouter = Router();

  sepomexRouter.get("/", async (req, res) => {
    const list = await getListStates();
    res.send(list);
  });

  sepomexRouter.get("/zip/:zip", async (req, res) => {
    const obj = await getSepomexResponse({ zip: req.params.zip });
    res.send(obj);
  });

  return { sepomexRouter };
};
