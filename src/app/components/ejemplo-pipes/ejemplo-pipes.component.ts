import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/interfaces/contacto.interface';
import { IJugador } from 'src/app/models/interfaces/jugador.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss'],
})
export class EjemploPipesComponent implements OnInit {
  dob: Date = new Date(2009, 0, 14);
  cambio: boolean = true;
  nombre: string = 'María';
  PI: number = 3.14159265359;
  precioCarrito: number = 100;
  persona: IContacto = {
    id: 0,
    nombre: 'Marcos',
    apellidos: 'Liberata',
    edad: 20,
    email: 'marcos@gmail.com'
  }

  cantidad:number = 0.3512;
  textoLargo:string = 'lorem ipsum doiwdhheu rewoiiiid wjqj q'

  // Ejemplo para pipe calcular puntuación
  jugador1: IJugador = {
    nombre: 'Marta',
    puntos: [10, 23, 52]
  }

  jugador2: IJugador = {
    nombre: 'Felipe',
    puntos: [21, 13, 51]
  }

  constructor() {}

  ngOnInit(): void {}

  get dateFormat() {
    return this.cambio ? 'shortDate' : 'fullDate';
  }

  cambiarFormato() {
    this.cambio = !this.cambio;
  }
}
