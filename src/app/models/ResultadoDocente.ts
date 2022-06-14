import { MateriaDocente } from "./MateriaDocente";
import {Categorias} from "./submodels/Categorias";

export class ResultadoDocente {
  constructor(
    public materias: MateriaDocente,
    public categorias: Categorias
  ) {
  }
}
