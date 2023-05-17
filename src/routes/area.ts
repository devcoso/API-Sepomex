import { Router } from "express";
import { getAreas, getErrors } from "../infrastructure/area";

export const AreaRouter = () => {
  const areaRouter = Router();
  // Dentro de area /area/
  areaRouter.get("/", async (req, res) => {
    const list = await getAreas();
    res.send(list);
  });
  areaRouter.get("/errors", async (req, res) => {
    const list = await getErrors();
    res.send(list);
  });

  return { areaRouter };
};
