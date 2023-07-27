import {Component, OnInit} from '@angular/core';
import {IProduto} from "./produtos";
import {ProdutosService} from "../produtos.service";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined; //undefided, lista de produto pode ser indefinido

  constructor(private produtosService: ProdutosService) {
  }

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll(); //obtendo todos os produtos
  }
}
