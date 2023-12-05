import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespostaDTO } from '../model/dto/RespostaDto';
import { Observable } from 'rxjs';
import { Resposta } from '../model/entity/Resposta';
import { RespostaDTOTree } from '../model/dto/RespostaDtoTree';
import { SolucaoDTO } from '../model/dto/SolucaoDto';

@Injectable({
  providedIn: 'root'
})
export class RespostaService{
  readonly URL_BASE: string = "http://localhost:8080/resposta";

  constructor(private http: HttpClient) {}

  buscarPorIdPergunta(idPergunta: number | null): Observable<RespostaDTOTree[]>{
    return this.http.get<RespostaDTOTree[]>(`${this.URL_BASE}/${idPergunta}`);
  }

  inserir(resposta: RespostaDTO): Observable<RespostaDTO>{
    return this.http.post<RespostaDTO>(this.URL_BASE, resposta);
  }

  marcarRespostaComoSolucao(solucaoDTO: SolucaoDTO): Observable<SolucaoDTO>{
    return this.http.put<SolucaoDTO>(`${this.URL_BASE}/solucao`,solucaoDTO);
  }
}
