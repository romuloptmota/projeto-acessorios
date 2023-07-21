import { Component } from '@angular/core';
import {produtos} from "../produtos";

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css']
})
export class DetalhesProdutosComponent {

  protected readonly produtos = produtos;
}
