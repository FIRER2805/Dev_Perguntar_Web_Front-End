export class PerguntaDTO {
    id: number | null;
    titulo: string;
    conteudo: string;
    dataPergunta: Date;
    dataResolucao: Date | null;
    idCategoria: number | null;
    idUsuario: number | null;
}
