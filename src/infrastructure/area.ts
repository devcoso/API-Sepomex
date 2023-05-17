import { Area } from "../domain/area/area";
import { CustomError } from "../domain/area/error";
import { getAllAreas, getAllErrors } from "../repositories/area-repository";

// Definicion
type AreaBL = {
  getAreas: () => Promise<Area[]>;
  getErrors: () => Promise<CustomError[]>;
};

export const getAreas: AreaBL["getAreas"] = async () => {
  let reponse = await getAllAreas();
  return reponse;
};

export const getErrors: AreaBL["getErrors"] = async () => {
  let response = await getAllErrors();
  return response;
};
