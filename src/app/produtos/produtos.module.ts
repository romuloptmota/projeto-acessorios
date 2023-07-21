import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe, NgForOf} from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import {RouterLink} from "@angular/router";
import { DetalhesProdutosComponent } from './detalhes-produtos/detalhes-produtos.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    CurrencyPipe,
    NgForOf,
    RouterLink,
    CurrencyPipe,
    NgForOf,
    RouterLink,
    CurrencyPipe,
    CurrencyPipe
  ]
})
export class ProdutosModule { }
