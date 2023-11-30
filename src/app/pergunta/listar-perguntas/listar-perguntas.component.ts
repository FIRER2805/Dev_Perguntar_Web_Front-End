import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PerguntaService } from 'src/app/shared/service/pergunta-service.service';

@Component({
  selector: 'app-listar-perguntas',
  templateUrl: './listar-perguntas.component.html',
  styleUrls: ['./listar-perguntas.component.scss']
})
export class ListarPerguntasComponent implements OnInit {
  
  constructor(private service: PerguntaService){}
  
  ngOnInit(): void {
    this.service.buscaTodos().subscribe(
      resultado => {
        //TODO fazer algo com o resultado
        console.log(resultado);
      },
      erro => {
        //TODO usar Swal.
        console.log('Erro ao buscar todas as perguntas', erro);
      }
    );
  }
}
