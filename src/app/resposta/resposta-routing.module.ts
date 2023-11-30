import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaRespostaComponent } from './tela-resposta/tela-resposta.component';

const routes: Routes = [
  {
    path: 'criar',
    component: TelaRespostaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RespostaRoutingModule { }
