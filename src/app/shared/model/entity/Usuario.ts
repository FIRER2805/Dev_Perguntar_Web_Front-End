import { Pergunta } from "./Pergunta";

export class Usuario{
    id: number | null = null;
    nome: string = '';
    email: string = '';
    senha: string = '';
    ativo: boolean = false;
    perguntas: Pergunta[] = [];
}