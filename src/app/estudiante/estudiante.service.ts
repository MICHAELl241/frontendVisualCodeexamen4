import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/environments/environment';
import { Estudiante } from './estudiante';
import { ListaEstudiantes } from './estudiante.json';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  //ese coidgo comentado sirve para manipualr mas ordenado
  //listaEstudiantesService = ListaEstudiantes;

  api = URL_SERVICIOS
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(

  private http: HttpClient

  ) {



   }
   listarEscuela():Observable<any>{
    return this.http.get<any>(this.api+"/escuela/lista")


  }


  listarEstudiantes(): any{
    //return this.listaEstudiantesService;

    return ListaEstudiantes;
  }

  listarEstudiantesByEscuela(idescuela:number): Observable<any>{

    return this.http.get(this.api+"/estudiante/list?idescuela="+idescuela)
  }
  resgistarAsignatura(estudiante:Estudiante):Observable<any>{


    console.log(estudiante);
    return this.http.post<Estudiante>(this.api+"/Asignatura/registrar", estudiante,{headers:this.httpHeaders})

  }

}
