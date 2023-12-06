import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pergunta } from '../model/entity/Pergunta';
import { PerguntaDTO } from '../model/dto/PerguntaDto';
import { PerguntaSeletor } from '../model/seletor/perguntaSeletor';
import { Page } from '../model/entity/Page';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {
  urlBase: string = "http://localhost:8080/pergunta";

  constructor(private http: HttpClient) {}

  buscarPorId(id: number | null): Observable<Pergunta>{
    return this.http.get<Pergunta>(`${this.urlBase}/${id}`);
  }

  buscarComFiltros(perguntaSeletor: PerguntaSeletor): Observable<Page<Pergunta>>{
    return this.http.post<Page<Pergunta>>(`${this.urlBase}/filtro`, perguntaSeletor);
  }

  inserirPergunta(pergunta: PerguntaDTO): Observable<PerguntaDTO>{
    return this.http.post<PerguntaDTO>(this.urlBase, pergunta);
  }

  marcarPerguntaComoResolvida(idPergunta: number){

  }
}
