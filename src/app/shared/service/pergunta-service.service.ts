import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pergunta } from '../model/entity/Pergunta';

@Injectable()
export class PerguntaService {

  constructor(private http: HttpClient) {}

  buscaTodos(): Observable<Pergunta[]>{
    return this.http.get<Pergunta[]>("localhost:8080/perguntas");
  }
}
