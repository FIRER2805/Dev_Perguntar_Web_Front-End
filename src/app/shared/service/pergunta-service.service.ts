import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pergunta } from '../model/Entity/Pergunta';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {
  constructor(private http: HttpClient) {}

  buscaTodos(): Observable<Array<Pergunta>>{
    return this.http.get<Array<Pergunta>>("http://localhost:8080/pergunta");
  }
}
