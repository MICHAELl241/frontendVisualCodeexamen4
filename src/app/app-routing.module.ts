import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { RegistrarasignaturaComponent } from './estudiante/registrarasignatura/registrarasignatura.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [

  {

    path: '',
    component:InicioComponent
  },
  {


    path: 'estudiantes',
    component:EstudianteComponent

  },
  {path: 'estudiantes/registro',
    component:RegistrarasignaturaComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
