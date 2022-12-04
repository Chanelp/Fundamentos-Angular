import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';



@NgModule({
  declarations: [
    ListaBasicaComponent
  ],
  imports: [
    CommonModule
  ],
  //Exportamos aquellas clases (componentes/piopes, services, etc) que queramos compartir a quien importe este modulo
  exports: [
    ListaBasicaComponent
  ]
})
export class ListModule { }
