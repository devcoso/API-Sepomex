import { Area } from "../domain/area/area";
import { CustomError } from "../domain/area/error";
import { APIResponse } from "../domain/global/api-response";
import { getAllAreas, getAllErrors } from "../repositories/area-repository";

// Definicion
type AreaBL = {
  getAreas: () => Promise<APIResponse<Area[]>>;
  getErrors: () => Promise<APIResponse<CustomError[]>>;
};

export const getAreas: AreaBL["getAreas"] = async () => {
  let response: APIResponse<Area[]> = {
    data: null,
    isSuccess: true,
    msg: "",
  };
  response.data = await getAllAreas();
  if (!response.data) {
    response.isSuccess = false;
    response.msg = "No se encontró áreas";
  }
  return response;
};

export const getErrors: AreaBL["getErrors"] = async () => {
  let response: APIResponse<CustomError[]> = {
    data: null,
    isSuccess: true,
    msg: "",
  };
  response.data = await getAllErrors();
  if (!response.data) {
    response.isSuccess = false;
    response.msg = "No se encontró áreas";
  }
  return response;
};
