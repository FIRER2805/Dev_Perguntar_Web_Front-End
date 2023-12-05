import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { RespostaDTOTree } from 'src/app/shared/model/dto/RespostaDtoTree';
import { Resposta } from 'src/app/shared/model/entity/Resposta';
import { RespostaService } from 'src/app/shared/service/resposta-service.service';
import { SolucaoDTO } from '../../shared/model/dto/SolucaoDto';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-arvore-respostas',
  templateUrl: './arvore-respostas.component.html',
  styleUrls: ['./arvore-respostas.component.scss']
})
export class ArvoreRespostasComponent implements OnInit{
  @Input()
  public idPergunta: number | null;
  @Input()
  public dataSolucao: Date | null;
  respostas: TreeNode<RespostaDTOTree>[];
  respostaSelecionada: TreeNode<any> | TreeNode<any>[] | null;

  constructor(private service: RespostaService, private router: Router,){}

  ngOnInit(): void {
    this.service.buscarPorIdPergunta(this.idPergunta).subscribe(respostas => {
      this.respostas = respostas;
    },
    err => {
      console.log(err);
    });
  }

  responder(idRespostaPai: number){
    this.router.navigate(['respostas/criar', this.idPergunta, idRespostaPai]);
  }

  marcarComoSolucao(idResposta: number){
    this.service.marcarRespostaComoSolucao(new SolucaoDTO(this.idPergunta, idResposta)).pipe(
      finalize(()=>{
        this.router.navigate(['respostas/visualizar', this.idPergunta]);
      })
    ).subscribe();
  }
}
