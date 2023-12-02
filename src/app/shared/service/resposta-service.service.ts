import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespostaDTO } from '../model/dto/RespostaDto';
import { Observable } from 'rxjs';
import { Resposta } from '../model/entity/Resposta';

@Injectable({
  providedIn: 'root'
})
export class RespostaService{
  urlBase: string = "http://localhost:8080/resposta";

  constructor(private http: HttpClient) {}

  buscarPorIdPergunta(idPergunta: number | null): Observable<Resposta[]>{
    return this.http.get<Resposta[]>(`${this.urlBase}/${idPergunta}`);
  }

  inserir(resposta: RespostaDTO): Observable<RespostaDTO>{
    return this.http.post<RespostaDTO>(this.urlBase, resposta);
  }
}
