import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/shared/model/entity/Categoria';
import { PerguntaSeletor } from 'src/app/shared/model/seletor/perguntaSeletor';
import { CategoriaService } from 'src/app/shared/service/categoria-service.service';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.scss'
})
export class BarraPesquisaComponent implements OnInit{
  seletor:  PerguntaSeletor = new PerguntaSeletor();
  categorias: Categoria[];

  constructor(private router: Router, private categoriaService: CategoriaService){}

  ngOnInit(): void {
    this.categoriaService.buscarTodos().subscribe(c => {
      this.categorias = c;
    },
    err => {
      console.log(err);
    })
  }

}
