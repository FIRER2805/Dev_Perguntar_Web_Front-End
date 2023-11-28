import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerguntaService } from '../../shared/service/pergunta-service.service';

@Component({
  selector: 'app-listar-perguntas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-perguntas.component.html',
  styleUrl: './listar-perguntas.component.scss',
  providers: [PerguntaService]
})
export class ListarPerguntasComponent implements OnInit {

  constructor(private service: PerguntaService){}

  ngOnInit(): void {
    console.log(this.service.buscaTodos());
  }

}
