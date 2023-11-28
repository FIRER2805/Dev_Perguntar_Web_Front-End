import { Pergunta } from "./Pergunta";
import { Usuario } from "./Usuario";

export class Resposta {
    id: number | null = null;
    conteudo: string = '';
    solucao: boolean | null = null;
    pergunta: Pergunta | null = null;
    usuario: Usuario | null = null;
    respostaPai: Resposta | null = null;
    respostaFilhas: Resposta[] = [];
}