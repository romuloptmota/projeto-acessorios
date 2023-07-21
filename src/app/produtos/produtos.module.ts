import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe, NgForOf} from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    CurrencyPipe,
    NgForOf,
    RouterLink,
    CurrencyPipe,
    NgForOf,
    RouterLink
  ]
})
export class ProdutosModule { }
