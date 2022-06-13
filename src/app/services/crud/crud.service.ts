import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {Alumno} from "../../models/Alumno";
import {Grupo} from "../../models/Grupo";
import {Academia} from "../../models/Academia";
import {Materia} from "../../models/Materia";
import {Periodo} from "../../models/Periodo";
import {Carrera} from "../../models/Carrera";
import {Docente} from "../../models/Docente";
import {SeleccionMateria} from "../../models/SeleccionMateria";
import {ResultadoDocente} from "../../models/ResultadoDocente";
import {MateriaDocente} from "../../models/MateriaDocente";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // baseUrl: string = 'https://gneissoid-gasolines.000webhostapp.com/api';
  baseUrl: string = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }
  //
  // POST Methods
  //
  addStudent(studentData: Alumno[]) {
    return this.http.post<Alumno[]>(this.baseUrl + "/student/addAll.php", studentData);
  }
  addSelectSubject(selectSubjectData: SeleccionMateria[]) {
    return this.http.post<SeleccionMateria[]>(this.baseUrl + "/selectsubject/addAll.php", selectSubjectData);
  }
  addTeacher(teacherData: Docente[]) {
    return this.http.post<Docente[]>(this.baseUrl + "/teacher/addAll.php", teacherData);
  }
  addCareer(careerData: Carrera[]) {
    return this.http.post<Carrera[]>(this.baseUrl + "/career/addAll.php", careerData);
  }
  addPeriod(periodData: Periodo[]) {
    return this.http.post<Periodo[]>(this.baseUrl + "/period/addAll.php", periodData);
  }
  addSubject(subjectData: Materia[]) {
    return this.http.post<Materia[]>(`${this.baseUrl}/subject/addAll.php`, subjectData);
  }
  addAcademy(academyData: Academia[]) {
    return this.http.post<Academia[]>(`${this.baseUrl}/academy/addAll.php`, academyData);
  }
  addGroup(groupData: Grupo[]) {
    return this.http.post<Grupo[]>(`${this.baseUrl}/group/addAll.php`, groupData);
  }

  addTeachersScore(control: string, resultadosDocentes: ResultadoDocente[]) {
    return this.http.post<ResultadoDocente[]>(`${this.baseUrl}/evaluation/addTeachersResults.php`, {control: control, resultados: resultadosDocentes});
  }
  //
  // GET Methods
  getTeachersAndSubjects(control: string) {
    return this.http.post<MateriaDocente[]>(`${this.baseUrl}/evaluation/getTeachersAndSubjects.php`, {"control": control});
  }
}
