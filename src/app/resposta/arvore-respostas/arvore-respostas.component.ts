import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Resposta } from 'src/app/shared/model/entity/Resposta';
import { RespostaService } from 'src/app/shared/service/resposta-service.service';

@Component({
  selector: 'app-arvore-respostas',
  templateUrl: './arvore-respostas.component.html',
  styleUrls: ['./arvore-respostas.component.scss']
})
export class ArvoreRespostasComponent implements OnInit{

  @Input()
  public idPergunta: number | null;
  respostas: TreeNode<Resposta>[] = [{
      label: "resposta",
       children: [{label: "resposta filha"}]
      }
    ];

  constructor(private service: RespostaService){}

  ngOnInit(): void {
    this.service.buscarPorIdPergunta(this.idPergunta).subscribe(respostas => {
      this.respostas = respostas;
    },
    err => {
      console.log(err);
    });
  }
}
