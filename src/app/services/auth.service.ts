import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  //Devolvemos la respuesta del Observable cuando la petición http se haya completado
  //El componente subscrito accederá al token de login
  login(email: string, password: string) : Observable<any>{

    let body = {
      email: email,
      password: password
    }

    return this.http.post('https://reqres.in/api/login', body);
  }

}
