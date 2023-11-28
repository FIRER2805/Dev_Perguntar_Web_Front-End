import { Categoria } from "./Categoria";
import { Usuario } from "./Usuario";

export class Pergunta {
    id: number | null = null;
    titulo: string = '';
    conteudo: string = '';
    dataPergunta: Date | null = null;
    dataResolucao: Date | null = null;
    categoria: Categoria | null = null;
    usuario: Usuario | null = null;
}