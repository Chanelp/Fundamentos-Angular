import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'; // Importación para animaciones

@Component({
  selector: 'app-ejemplo-animacion',
  templateUrl: './ejemplo-animacion.component.html',
  styleUrls: ['./ejemplo-animacion.component.scss'],

  // Metadatos para animación del componente
  animations: [
    trigger('animaciones', [
      state('active', style({
        transform: 'translate(10px, 20px)'
      })),
      state('inactive', style({
        transform: 'translate(30px, 40px)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class EjemploAnimacionComponent implements OnInit {
  state: string = 'inactive';

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.state == 'active'){
        this.state = 'inactive';
      } else {
        this.state = 'active';
      }
    }, 1000)
  }
}
