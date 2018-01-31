import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ShoppingService} from "../services/shopping.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  query: string;
  @Output() buscaEvent = new EventEmitter<string>();
  sugestoes: string[];

  constructor(private shoppingService: ShoppingService, private router: Router) { }

  buscar() {
    this.router.navigate(['/']);
    this.buscaEvent.emit(this.query);
  }

  sugerir(event) {
    this.shoppingService.autoComplete(event.query)
      .then(resposta => {
        if (resposta.aggregations.autocomplete.buckets.length) {
          this.sugestoes = [resposta.aggregations.autocomplete.buckets.pop().key];
        }
      });
  }
}
