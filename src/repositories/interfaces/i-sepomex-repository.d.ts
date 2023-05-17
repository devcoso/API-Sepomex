import { CatalogoSepomex } from "../../domain/sepomex/catalogo-sepomex";

// Definición
export type ISepomexRepository = {
  getStates: () => Promise<CatalogoSepomex[]>;
  getSuburbs: (params: { zip: string }) => Promise<CatalogoSepomex[]>;
};
