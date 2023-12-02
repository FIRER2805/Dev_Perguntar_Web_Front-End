import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespostaDTO } from 'src/app/shared/model/dto/RespostaDto';
import { RespostaService } from 'src/app/shared/service/resposta-service.service';

@Component({
  selector: 'app-tela-resposta',
  templateUrl: './tela-resposta.component.html',
  styleUrls: ['./tela-resposta.component.scss']
})
export class TelaRespostaComponent implements OnInit {
  resposta: RespostaDTO = new RespostaDTO();

  constructor(private http: HttpClient, private service: RespostaService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.resposta.idPergunta = this.route.snapshot.params["id"];
  }

  inserir(): void{
    this.resposta.solucao = false;
    this.service.inserir(this.resposta).subscribe(r => {
      console.log(r);
    },
    err => {
      console.log(err);
    });
  }
}
