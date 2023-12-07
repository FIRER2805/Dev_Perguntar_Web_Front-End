import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/entity/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  readonly URL_BASE: string = "http://localhost:8080/usuario";

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.URL_BASE}`);
  }
}
