import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pergunta } from 'src/app/shared/model/entity/Pergunta';
import { PerguntaService } from 'src/app/shared/service/pergunta-service.service';

@Component({
  selector: 'app-visualizar-pergunta',
  templateUrl: './visualizar-pergunta.component.html',
  styleUrls: ['./visualizar-pergunta.component.scss']
})
export class VisualizarPerguntaComponent implements OnInit {
  pergunta: Pergunta;

  constructor(private service: PerguntaService, private route: ActivatedRoute){}

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id'];
    this.service.buscarPorId(id).subscribe(p=>{
        this.pergunta = p;
      }
      ,err=>{
        console.log(err)
      }
    );
  }
}
