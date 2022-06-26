import { Component, OnInit } from '@angular/core';
import { ListaEstudiantes } from './estudiante.json';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
estudianteLista: any;

estudianteListaServidor: any;

//retorna lista de estudinate directo del json sin pasra pro el service
  //constructor() {

    //this.estudianteLista=ListaEstudiantes;
   //}

   constructor(private estudianteService: EstudianteService) {

    this.estudianteLista = this.estudianteService.listarEstudiantes();
    console.log(this.estudianteLista);

   }

  ngOnInit(): void {

    this.listarEstudiantesByEscuela(1);
  }

  listarEstudiantesByEscuela(idescuela:number){
    this.estudianteService.listarEstudiantesByEscuela(idescuela).subscribe((res:any) =>{
      this.estudianteListaServidor = res.data;
    }

    )
  }
}
