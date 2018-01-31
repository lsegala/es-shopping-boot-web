import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-menu-lat',
  templateUrl: './menu-lat.component.html',
  styleUrls: ['./menu-lat.component.css']
})
export class MenuLatComponent {
  @Input() itens: MenuItem[] = [];
  @Input() filtro: string;
  @Output() filtroExcluidoEvent = new EventEmitter();

  constructor() { }

  onFiltroExcluido() {
    this.filtroExcluidoEvent.emit();
  }
}
