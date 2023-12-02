import { Pergunta } from "./Pergunta";
import { Usuario } from "./Usuario";

export class Resposta {
    id: number | null;
    conteudo: string;
    solucao: boolean | null;
    pergunta: Pergunta | null;
    usuario: Usuario | null;
    respostaPai: Resposta | null;
    children: Resposta[];
}
