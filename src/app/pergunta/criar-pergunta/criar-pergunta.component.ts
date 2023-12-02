import { Component, OnInit } from '@angular/core';
import { Pergunta } from '../../shared/model/entity/Pergunta';
import { PerguntaService } from 'src/app/shared/service/pergunta-service.service';
import { PerguntaDTO } from 'src/app/shared/model/dto/PerguntaDto';
import { Categoria } from 'src/app/shared/model/entity/Categoria';
import { CategoriaService } from 'src/app/shared/service/categoria-service.service';

@Component({
  selector: 'app-criar-pergunta',
  templateUrl: './criar-pergunta.component.html',
  styleUrls: ['./criar-pergunta.component.scss']
})
export class CriarPerguntaComponent implements OnInit {
  pergunta: PerguntaDTO = new PerguntaDTO();
  categorias: Categoria[];

  constructor(private service: PerguntaService, private categoriaService: CategoriaService){}

  ngOnInit(): void {
    this.categoriaService.buscarTodos().subscribe(c => {
      this.categorias = c;
    },
    err => {
      console.log(err);
    })
  }

  perguntar(){
    this.pergunta.dataPergunta = new Date();
    this.service.inserirPergunta(this.pergunta).subscribe(p => {
      
    },
    err => {
      console.log(err);
    });
  }
}
