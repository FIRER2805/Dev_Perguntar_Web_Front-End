import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/shared/model/entity/Categoria';
import { Page } from 'src/app/shared/model/entity/Page';
import { Pergunta } from 'src/app/shared/model/entity/Pergunta';
import { PerguntaSeletor } from 'src/app/shared/model/seletor/perguntaSeletor';
import { CategoriaService } from 'src/app/shared/service/categoria-service.service';
import { PerguntaService } from 'src/app/shared/service/pergunta-service.service';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.scss'
})
export class BarraPesquisaComponent implements OnInit{

  seletor: PerguntaSeletor = new PerguntaSeletor();
  categorias: Categoria[];
  @Output()
  public perguntasComFiltro: EventEmitter<Page<Pergunta>> = new EventEmitter<Page<Pergunta>>();
  @Output()
  public compartilhaSeletor: EventEmitter<PerguntaSeletor> = new EventEmitter<PerguntaSeletor>();

  constructor(private router: Router, private categoriaService: CategoriaService, private perguntaService: PerguntaService){}

  ngOnInit(): void {
    this.categoriaService.buscarTodos().subscribe(c => {
      this.categorias = c;
    },
    err => {
      console.log(err);
    })
  }

  pesquisar(perguntaSeletor: PerguntaSeletor){
    this.perguntaService.buscarComFiltros(perguntaSeletor).subscribe(p => {
      this.perguntasComFiltro.emit(p);
      this.compartilhaSeletor.emit(this.seletor);
      console.log(p);
    },
    err => {
      console.log(err);
    });
  }

  limparFiltros(){
    this.seletor = new PerguntaSeletor();
  }

}
