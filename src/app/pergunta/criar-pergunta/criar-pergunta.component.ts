import { Component, OnInit } from '@angular/core';
import { Pergunta } from '../../shared/model/entity/Pergunta';
import { PerguntaService } from 'src/app/shared/service/pergunta-service.service';
import { PerguntaDTO } from 'src/app/shared/model/dto/PerguntaDto';
import { Categoria } from 'src/app/shared/model/entity/Categoria';
import { CategoriaService } from 'src/app/shared/service/categoria-service.service';
import { Router } from '@angular/router';
import { Usuario } from '../../shared/model/entity/Usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-criar-pergunta',
  templateUrl: './criar-pergunta.component.html',
  styleUrls: ['./criar-pergunta.component.scss']
})
export class CriarPerguntaComponent implements OnInit {
  pergunta: PerguntaDTO = new PerguntaDTO();
  categorias: Categoria[];
  usuarios: Usuario[];

  constructor(private service: PerguntaService, private categoriaService: CategoriaService,
    private router: Router, private usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.categoriaService.buscarTodos().subscribe(c => {
      this.categorias = c;
    },
    err => {
      console.log(err);
    });
    this.usuarioService.buscarTodos().subscribe(u => {
      this.usuarios = u;
    },
    err => {
      console.log(err);
    });
  }

  perguntar(){
    this.pergunta.dataPergunta = new Date();
    if(this.pergunta.idCategoria == null){
      this.pergunta.idCategoria = 1;
    }
    if(this.pergunta.idUsuario == null){
      this.pergunta.idUsuario = 1;
    }
    this.service.inserirPergunta(this.pergunta).subscribe(p => {
      this.router.navigate([""]);
    },
    err => {
      console.log(err);
    });
  }
}
