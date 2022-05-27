export class Alumno {
  constructor(
    public control: string,
    public clave_carrera: string,
    public reticula: number,
    public semestre: number,
    public estado: string,
    public plan_estudios: number,
    public nombre_completo: string,
    public nip: number
  ) { }
}
