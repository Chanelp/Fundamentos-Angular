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
      state('subir', style({
        transform: 'translateY(15px)'
      })),
      state('bajar', style({
        transform: 'translateY(-15px)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out')),
      transition('active => subir', animate('1000ms ease-in')),
      transition('subir => active', animate('1000ms ease-out')),
      transition('active => bajar', animate('1000ms ease-in')),
      transition('bajar => active', animate('1000ms ease-out')),
      transition('inactive => subir', animate('1000ms ease-in')),
      transition('subir => inactive', animate('1000ms ease-out')),
      transition('inactive => bajar', animate('1000ms ease-in')),
      transition('bajar => inactive', animate('1000ms ease-out')),
      transition('subir => bajar', animate('1000ms ease-in')),
      transition('bajar => subir', animate('1000ms ease-out'))
    ])
  ]
})
export class EjemploAnimacionComponent implements OnInit {
  state: string = 'inactive';

  constructor() { }

  ngOnInit(): void {

    // setInterval(() => {
    //   if(this.state == 'active'){
    //     this.state = 'inactive';
    //   } else {
    //     this.state = 'active';
    //   }
    // }, 1000)
  }

  cambiarEstadoActivado(){
    if(this.state == 'active'){
      this.state = 'inactive';
      } else {
      this.state = 'active';
      }
  }

  subir(){
    this.state = 'subir';
  }

  bajar(){
    this.state = 'bajar';
  }

}
