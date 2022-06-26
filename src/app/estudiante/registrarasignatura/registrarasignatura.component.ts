import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from '../estudiante';
import { EstudianteService } from '../estudiante.service';

@Component({
  selector: 'app-registrarasignatura',
  templateUrl: './registrarasignatura.component.html',

})
export class RegistrarasignaturaComponent implements OnInit {

  titulo: String="Registrar asignatura"
  escuela:Estudiante   = new Estudiante();

  constructor(private escuelaService:EstudianteService,
    private router:Router,
    private activeRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  public registrarAsignatura(): void{

    this.escuelaService.resgistarAsignatura(this.escuela).subscribe(
      response => this.router.navigate(['/estudiantes'])


    )


  }

}
