import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPerguntasComponent } from './listar-perguntas/listar-perguntas.component';
import { VisualizarPerguntaComponent } from './visualizar-pergunta/visualizar-pergunta.component';
import { FormsModule } from '@angular/forms';
import { PerguntaRoutingModule } from './pergunta-routing.module';
import { CriarPerguntaComponent } from './criar-pergunta/criar-pergunta.component';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    ListarPerguntasComponent,
    VisualizarPerguntaComponent,
    CriarPerguntaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PerguntaRoutingModule,
    EditorModule
  ],
  exports:[
    ListarPerguntasComponent,
    VisualizarPerguntaComponent
  ]
})
export class PerguntaModule { }
