import { RouterModule, Routes } from '@angular/router';
import { VisualizarPerguntaComponent } from './visualizar-pergunta/visualizar-pergunta.component';
import { NgModule } from '@angular/core';
import { ListarPerguntasComponent } from './listar-perguntas/listar-perguntas.component';
import { CriarPerguntaComponent } from './criar-pergunta/criar-pergunta.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

const routes: Routes = [
    {
      path: 'visualizar/:id', component: VisualizarPerguntaComponent
    },
    {
      path: '', component: ListarPerguntasComponent
    },
    {
      path: 'criar', component: CriarPerguntaComponent
    },
    {
      path: 'relatorio', component: RelatorioComponent
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PerguntaRoutingModule { }
