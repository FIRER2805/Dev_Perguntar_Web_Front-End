import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { RespostaDTOTree } from 'src/app/shared/model/dto/RespostaDtoTree';
import { Resposta } from 'src/app/shared/model/entity/Resposta';
import { RespostaService } from 'src/app/shared/service/resposta-service.service';
import { SolucaoDTO } from '../../shared/model/dto/SolucaoDto';
import { finalize } from 'rxjs';
import { Pergunta } from 'src/app/shared/model/entity/Pergunta';
import { PerguntaService } from 'src/app/shared/service/pergunta-service.service';

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

  @Output()
  public atualizaPergunta: EventEmitter<Pergunta> = new EventEmitter();

  respostas: TreeNode<RespostaDTOTree>[];
  respostaSelecionada: TreeNode<any> | TreeNode<any>[] | null;

  constructor(private service: RespostaService, private router: Router, private perguntaService: PerguntaService){}

  ngOnInit(): void {
    this.buscarRespostas();
  }

  buscarRespostas(){
    this.service.buscarPorIdPergunta(this.idPergunta).subscribe(respostas => {
      this.respostas = respostas;
    },
    err => {
      console.log(err);
    });
  }

  recaregarPergunta(){
    this.perguntaService.buscarPorId(this.idPergunta).subscribe(p => {
      this.atualizaPergunta.emit(p);
    });
  }

  responder(idRespostaPai: number){
    this.router.navigate(['respostas/criar', this.idPergunta, idRespostaPai]);
  }

  marcarComoSolucao(idResposta: number){
    this.service.marcarRespostaComoSolucao(new SolucaoDTO(this.idPergunta, idResposta))
    .subscribe(p=>{
      this.recaregarPergunta();
      this.buscarRespostas();
    }
    ,err=>{
      console.log(err);
    }
  );
  }
}
