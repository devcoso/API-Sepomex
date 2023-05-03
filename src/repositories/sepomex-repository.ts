import { CatalogoSepomex } from "../domain/sepomex/catalogo-sepomex";
import { DBContext } from "./db-context";

// Definición
export type SepomexRepository = {
  getStates: () => Promise<CatalogoSepomex[]>;
  getSuburbs: (params: { zip: string }) => Promise<CatalogoSepomex[]>;
};

// Implementación
export const getStates: SepomexRepository["getStates"] = async () => {
  const dbContextResult = await DBContext({
    sql: "SELECT idEstado, estado FROM CatalogoSepomex GROUP BY (estado);",
  });
  const response: CatalogoSepomex[] = dbContextResult;
  return response;
};

// Implementación
export const getSuburbs: SepomexRepository["getSuburbs"] = async ({ zip }) => {
  const response: CatalogoSepomex[] = await DBContext({
    sql: `SELECT * FROM CatalogoSepomex WHERE cp = '${zip}';`,
  });
  return response;
};
