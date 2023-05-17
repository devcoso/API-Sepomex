import { Area } from "../domain/area/area";
import { CustomError } from "../domain/area/error";
import { DBContext } from "./db-context";
import { IAreaRepository } from "./interfaces/i-area-repository";

// Implementación
export const getAllAreas: IAreaRepository["getAllAreas"] = async () => {
  const dbContextResult = await DBContext({
    sql: "SELECT idArea, name, description, createAt, updateAt FROM appsmxco_tickets.Areas;",
  });
  const response: Area[] = dbContextResult;
  return response;
};

// Implementación
export const getAllErrors: IAreaRepository["getAllError"] = async () => {
  const dbContextResult = await DBContext({
    sql: "SELECT idError, description, idArea, createAt, updateAt FROM appsmxco_tickets.Errors;",
  });
  const response: CustomError[] = dbContextResult;
  return response;
};
