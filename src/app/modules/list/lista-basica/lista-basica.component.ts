import { Component, OnInit } from '@angular/core';

//Creamos un tipo base para el ejemplo

export type Producto = {
  nombre: string,
  precio: number,
  descripcion: string
}


@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit {

  listaElementos: Producto[] = [{
    nombre: "Leche",
    precio: 300,
    descripcion: "Descremada"
  },
  {
    nombre: "Carne",
    precio: 200,
    descripcion: "De vaca"
  },
  {
    nombre: "Chocolate",
    precio: 25,
    descripcion: "Agrio"
  },
  {
    nombre: "Maní",
    precio: 15,
    descripcion: "Con limón"
  }];

  cargando: boolean = true;

  option: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCargando(){
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida: number){
    this.option = opcionEscogida; //El valor cambiar, implica un cambio en los elementos renderizados
  }

}
