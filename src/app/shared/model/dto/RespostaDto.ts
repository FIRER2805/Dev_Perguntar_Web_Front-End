export class RespostaDTO {
  id: number | null;
  conteudo: string;
  solucao: boolean | null;
  idPergunta: number | null;
  idUsuario: number | null;
  idRespostaPai: number | null;
}
