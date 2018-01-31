import {Component, OnInit} from '@angular/core';
import {ShoppingService} from './services/shopping.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itens: any[] = [];
  categorias: any[] = [];
  sugestoes: any[] = [];
  query: string;
  filtro: string;
  rows = 12;
  total = 0;
  page = 0;

  constructor(private router: Router, private service: ShoppingService) {}

  get exibirItens() {
    return this.router.url === '/';
  }

  ngOnInit(): void {
    this.service.getItens(this.query, this.filtro, this.page, this.rows)
      .then(itens => {
        this.total = itens.hits.total;
        this.itens = itens.hits.hits.map(o => {
          const newObj = o._source;
          newObj['id'] = o._id;
          return newObj;
        });
        if (this.itens && this.itens.length) {
          this.categorias = itens.aggregations.categoria_agg.buckets.map(bucket => {
            return {
              label: bucket.key + ' (' + bucket.doc_count + ')',
              icon: 'fa-filter',
              command: (event) => {
                this.filtro = event.item.label.replace(/(.*)( \(.*\))/, '$1');
                this.router.navigate(['/']);
                this.ngOnInit();
              }
            };
          });
        } else {
          this.service.voceQuisDizer(this.query)
            .then(resposta => {
              if (resposta['suggest']) {
                this.sugestoes = resposta['suggest'].voceQuisDizer[0].options.map(o => o.text);
              }
            });
        }
      });
  }

  onCarregarItens(event) {
    this.page = event.first;
    this.ngOnInit();
  }

  onBuscaRealizada(queryValue: string) {
    this.query = queryValue;
    this.ngOnInit();
  }

  onFiltroExcluido() {
    this.filtro = null;
    this.ngOnInit();
  }
}
