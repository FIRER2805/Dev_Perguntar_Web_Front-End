import { Injectable } from '@angular/core';
import { Categoria } from '../model/entity/Categoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlBase = "http://localhost:8080/categoria";

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlBase);
  }
}
