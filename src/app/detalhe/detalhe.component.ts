import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShoppingService} from '../services/shopping.service';
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  item: any = {};
  breadcrumbs: MenuItem[] = [];
  imagens: any[] = [];

  constructor(private route: ActivatedRoute, private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.carregaDetalhe(params['id']);
      });
  }

  private carregaDetalhe(id: number) {
    this.shoppingService.getItem(id)
      .then(response => {
        this.item = response._source;
        this.breadcrumbs = this.item.breadcrumps.map(categoria => {
          return {
            label: categoria
          };
        });
        this.imagens = this.item.imagens.map(src => {
          return {
            source: src
          };
        });
      });
  }
}
