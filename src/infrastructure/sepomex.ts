import { CatalogoSepomex } from "../domain/sepomex/catalogo-sepomex";
import { Estado } from "../domain/sepomex/estado";
import { SepomexResponse } from "../domain/sepomex/sepomex-reponse";
import { getStates, getSuburbs } from "../repositories/sepomex-repository";
import { APIResponse } from "../domain/global/api-response";

// Definición
type SepomexBL = {
  getListStates: () => Promise<APIResponse<Estado[]>>;
  getSepomexResponse: (params: {
    zip: string;
  }) => Promise<APIResponse<SepomexResponse> | null>;
};

export const getListStates: SepomexBL["getListStates"] = async () => {
  const result = await getStates();
  let response: APIResponse<Estado[]> = {
    data: null,
    isSuccess: true,
    msg: "",
  };
  const list: Estado[] = [];
  result.map((item) => list.push({ estado: item.estado, idEstado: item.idEstado }));
  response.data = list;
  if (!response.data) {
    response.isSuccess = false;
    response.msg = "No se encontraron estados";
  } 
  return response;
};

export const getSepomexResponse: SepomexBL["getSepomexResponse"] = async ({
  zip,
}) => {
  const result: CatalogoSepomex[] = await getSuburbs({ zip });
  let response: APIResponse<SepomexResponse> = {
    data: null,
    isSuccess: true,
    msg: "",
  };
  response.data = {
    colonias: result.map((item) => item.asentamiento),
    estado: result[0].estado,
    municipio: result[0].municipio,
    tipo: result[0].tipo,
    zona: result[0].zona,
  }
  if (!response.data) {
    response.isSuccess = false;
    response.msg = "No se encontró nada con ese zip";
  }
  return response;
};
