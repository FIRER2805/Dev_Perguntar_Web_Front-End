import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pergunta } from '../model/entity/Pergunta';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {
  urlBase: string = "http://localhost:8080/pergunta";

  constructor(private http: HttpClient) {}

  buscaTodos(): Observable<Array<Pergunta>>{
    return this.http.get<Array<Pergunta>>(this.urlBase);
  }

  buscarPorId(id: number): Observable<Pergunta>{
    return this.http.get<Pergunta>(`${this.urlBase}/${id}`);
  }
}
