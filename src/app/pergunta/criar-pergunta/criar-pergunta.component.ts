import { Component } from '@angular/core';
import { Pergunta } from '../../shared/model/entity/Pergunta';
import { PerguntaService } from 'src/app/shared/service/pergunta-service.service';

@Component({
  selector: 'app-criar-pergunta',
  templateUrl: './criar-pergunta.component.html',
  styleUrls: ['./criar-pergunta.component.scss']
})
export class CriarPerguntaComponent {
  pergunta: Pergunta = new Pergunta();

  constructor(private service: PerguntaService){}

  perguntar(){
    this.pergunta.dataPergunta = new Date();
    this.service.inserirPergunta(this.pergunta);
  }
}
