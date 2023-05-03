import { CatalogoSepomex } from "../domain/sepomex/catalogo-sepomex";
import { Estado } from "../domain/sepomex/estado";
import { SepomexResponse } from "../domain/sepomex/sepomex-reponse";
import { getStates, getSuburbs } from "../repositories/sepomex-repository";

// Definición
type SepomexBL = {
  getListStates: () => Promise<Estado[]>;
  getSepomexResponse: (params: {
    zip: string;
  }) => Promise<SepomexResponse | null>;
};

export const getListStates: SepomexBL["getListStates"] = async () => {
  const response = await getStates();
  const list: Estado[] = [];
  response.map((item) =>
    list.push({ estado: item.estado, idEstado: item.idEstado })
  );
  return list;
};

export const getSepomexResponse: SepomexBL["getSepomexResponse"] = async ({
  zip,
}) => {
  const result: CatalogoSepomex[] = await getSuburbs({ zip });
  const response: SepomexResponse = {
    colonias: result.map((item) => item.asentamiento),
    estado: result[0].estado,
    municipio: result[0].municipio,
    tipo: result[0].tipo,
    zona: result[0].zona,
  };
  return response;
};
