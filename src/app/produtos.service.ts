import { Injectable } from '@angular/core';
import {IProduto, produtos} from "./produtos/produtos";

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  // metodo retornar todos produtos
  getAll(){
    return this.produtos;
  }

  // metodo retornar o produto dentro da condição igual id
  getOne(productoId: number){
    return this.produtos.find(produtos => produtos.id === productoId)
  }
}
