export class Grupo {
  constructor(
    public periodo: string,
    public materia: string,
    public grupo: string,
    public capacidad: number,
    public alumnos_inscritos: number,
    public rfc_docente: string
  ) {
  }
}
