import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespostaDTO } from '../model/dto/RespostaDto';
import { Observable } from 'rxjs';
import { Resposta } from '../model/entity/Resposta';
import { RespostaDTOTree } from '../model/dto/RespostaDtoTree';

@Injectable({
  providedIn: 'root'
})
export class RespostaService{
  urlBase: string = "http://localhost:8080/resposta";

  constructor(private http: HttpClient) {}

  buscarPorIdPergunta(idPergunta: number | null): Observable<RespostaDTOTree[]>{
    return this.http.get<RespostaDTOTree[]>(`${this.urlBase}/${idPergunta}`);
  }

  inserir(resposta: RespostaDTO): Observable<RespostaDTO>{
    return this.http.post<RespostaDTO>(this.urlBase, resposta);
  }
}
