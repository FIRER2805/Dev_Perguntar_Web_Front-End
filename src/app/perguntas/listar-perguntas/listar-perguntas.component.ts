import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-perguntas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-perguntas.component.html',
  styleUrl: './listar-perguntas.component.scss'
})
export class ListarPerguntasComponent {

  constructor(private http: HttpClient){}

  buscarPerguntas(){
    this.http.get
  }
}
