import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/interfaces/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})

export class ListaContactosComponent implements OnInit, OnDestroy {

  //Inyectamos en el constructor el servicio de Contactos
  constructor(private contactoService: ContactoService) { }

  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  //Subscripción a servicio
  subscription: Subscription | undefined;

  ngOnInit(): void {
    //Obtener la lista de contactos que nos brinda el servicio
    this.contactoService.obtenerContactos()
      .then((lista: IContacto[]) => this.listaContactos= lista)
      .catch((error) => console.error(`Se produjo un error ${error}`))
      .finally(() => console.log("Petición de lista de contactos terminada"));
  }

  obtenerContacto(id: number){
    this.subscription = this.contactoService.obtenerContactoPorId(id)?.subscribe((contacto: IContacto) => this.contactoSeleccionado = contacto);

    /*?.then((contacto: IContacto) => this.contactoSeleccionado = contacto)
    .catch((error) => console.error(`Se produjo un error ${error} al recuperar el contacto`))
    .finally(() => console.log("Petición del contacto por id terminada")); - ESTO ERA CON PROMESAS*/
  }

  close(){
    this.contactoSeleccionado = undefined;
  }

  ngOnDestroy(): void {
    //Cancelar subscrición
    this.subscription?.unsubscribe;
  }

}
