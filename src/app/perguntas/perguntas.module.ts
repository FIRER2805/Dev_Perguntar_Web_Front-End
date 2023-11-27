import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPerguntasComponent } from './listar-perguntas/listar-perguntas.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListarPerguntasComponent
  ],
  exports: [ListarPerguntasComponent]
})
export class PerguntasModule { }
