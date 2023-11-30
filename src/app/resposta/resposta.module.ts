import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RespostaRoutingModule } from './resposta-routing.module';
import { TelaRespostaComponent } from './tela-resposta/tela-resposta.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ArvoreRespostasComponent } from './arvore-respostas/arvore-respostas.component';


@NgModule({
  declarations: [
    TelaRespostaComponent,
    ArvoreRespostasComponent
  ],
  imports: [
    CommonModule,
    RespostaRoutingModule,
    EditorModule
  ],
  exports: [
    ArvoreRespostasComponent
  ]
})
export class RespostaModule { }
