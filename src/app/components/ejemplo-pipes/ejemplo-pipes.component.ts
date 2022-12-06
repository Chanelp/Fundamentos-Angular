import { Component, OnInit } from '@angular/core';
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
