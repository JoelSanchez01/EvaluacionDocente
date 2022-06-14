export class Docente {
  constructor(
    public rfc: string,
    public clave_area: string,
    public curp: string,
    public no_tarjeta: string,
    public nombre_completo: string,
    public nombramiento: string,
    public tipo: string,
    public estado: string
  ) {
  }
}
