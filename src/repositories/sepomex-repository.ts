import { CatalogoSepomex } from "../domain/sepomex/catalogo-sepomex";
import { DBContext } from "./db-context";
import { ISepomexRepository } from "./interfaces/i-sepomex-repository";

// Implementación
export const getStates: ISepomexRepository["getStates"] = async () => {
  const dbContextResult = await DBContext({
    sql: "SELECT idEstado, estado FROM CatalogoSepomex GROUP BY (estado);",
  });
  const response: CatalogoSepomex[] = dbContextResult;
  return response;
};

// Implementación
export const getSuburbs: ISepomexRepository["getSuburbs"] = async ({ zip }) => {
  const response: CatalogoSepomex[] = await DBContext({
    sql: `SELECT * FROM CatalogoSepomex WHERE cp = '${zip}';`,
  });
  
  return response;
};
