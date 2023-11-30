import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'perguntas',
    loadChildren:() => import('./pergunta/pergunta.module').then(m => m.PerguntaModule)
  },
  {
    path: 'respostas',
    loadChildren:() => import('./resposta/resposta.module').then(r => r.RespostaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
