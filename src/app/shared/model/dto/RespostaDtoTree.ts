import { TreeNode } from "primeng/api";

export interface RespostaDTOTree extends TreeNode {
  solucao: boolean | null;
  idUsuario: number | null;
  idRespostaPai: number | null;
}
