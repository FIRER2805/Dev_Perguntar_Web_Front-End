import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RespostaRoutingModule } from './resposta-routing.module';
import { TelaRespostaComponent } from './tela-resposta/tela-resposta.component';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    TelaRespostaComponent
  ],
  imports: [
    CommonModule,
    RespostaRoutingModule,
    EditorModule
  ]
})
export class RespostaModule { }
