import { Area } from "../../domain/area/area";
import { CustomError } from "../../domain/area/error";

export type IAreaRepository = {
  getAllAreas: () => Promise<Area[]>;
  getAllError: () => Promise<CustomError[]>;
};
