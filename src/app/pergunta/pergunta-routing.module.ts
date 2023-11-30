import { RouterModule, Routes } from '@angular/router';
import { VisualizarPerguntaComponent } from './visualizar-pergunta/visualizar-pergunta.component';
import { NgModule } from '@angular/core';
import { ListarPerguntasComponent } from './listar-perguntas/listar-perguntas.component';
import { CriarPerguntaComponent } from './criar-pergunta/criar-pergunta.component';

const routes: Routes = [
    {
      path: 'visualizar', component: VisualizarPerguntaComponent
    },
    {
      path: 'home', component: ListarPerguntasComponent
    },
    {
      path: 'criar', component: CriarPerguntaComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PerguntaRoutingModule { }