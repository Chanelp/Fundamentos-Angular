import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss'],
})
export class EjemploPipesComponent implements OnInit {
  dob: Date = new Date(2009, 0, 14);
  cambio: boolean = true;
  nombre: string = 'María';

  constructor() {}

  ngOnInit(): void {}

  get dateFormat() {
    return this.cambio ? 'shortDate' : 'fullDate';
  }

  cambiarFormato() {
    this.cambio = !this.cambio;
  }
}
