import {Categorias} from "./submodels/Categorias";

export class ResultadoDocente {
  constructor(
    public rfc: string,
    public control: string,
    public categorias: Categorias
  ) {
  }
}
