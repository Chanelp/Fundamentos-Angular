import { Injectable } from '@angular/core';

//Importamos la lista de contactos
import { CONTACTOS } from '../mocks/contactos.mocks';
import { IContacto } from '../models/interfaces/contacto.interface';

//Importamos Observables de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]>{
    return Promise.resolve(CONTACTOS); //Nos devuelve un listado de contactos
  }

  obtenerContactoPorId(id: number): Observable<IContacto> | undefined{

    //Buscamos el contacto por ID dentro de la lista de contactos mockeados
    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id);

    //Creamos un observable
    let observable: Observable<IContacto> = new Observable(observer => {
      observer.next(contacto); //Emitir un valor a todo componente suscrito
      observer.complete(); //No emitimos más valores
    })

    if(contacto){
      return observable;
      //return Promise.resolve(contacto); - Esto era con promesas
    } else{
      return;
    }
  }

}
