import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'src/app/shared/model/entity/Page';
import { Pergunta } from 'src/app/shared/model/entity/Pergunta';
import { PerguntaSeletor } from 'src/app/shared/model/seletor/perguntaSeletor';
import { PerguntaService } from 'src/app/shared/service/pergunta-service.service';

@Component({
  selector: 'app-listar-perguntas',
  templateUrl: './listar-perguntas.component.html',
  styleUrls: ['./listar-perguntas.component.scss']
})
export class ListarPerguntasComponent implements OnInit {

  perguntas: Page<Pergunta>;

  constructor(private service: PerguntaService, private router: Router){}

  ngOnInit(): void {
    this.service.buscarComFiltros(new PerguntaSeletor()).subscribe(
      resultado => {
        this.perguntas = resultado;
      },
      erro => {
        //TODO usar Swal.
        console.log('Erro ao buscar todas as perguntas', erro);
      }
    );
  }

  visualizarPergunta(pergunta: Pergunta){
    this.router.navigate(['perguntas/visualizar', pergunta.id]);
  }
}
