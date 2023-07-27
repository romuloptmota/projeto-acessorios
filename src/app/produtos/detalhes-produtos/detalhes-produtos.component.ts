import {Component, OnInit} from '@angular/core';
import {IProduto} from "../produtos";
import {ActivatedRoute} from "@angular/router";
import {ProdutosService} from "../../produtos.service";

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css']
})
export class DetalhesProdutosComponent implements OnInit{
  produto: IProduto | undefined; //undefided, lista de produto pode ser indefinido
  quantidade = 1;

  constructor(private produtoService: ProdutosService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;// retornar todos parametros da rota
    const produtoId = Number(routeParams.get("id")); // retorna pelo id
    this.produto = this.produtoService.getOne(produtoId);
  }
}
