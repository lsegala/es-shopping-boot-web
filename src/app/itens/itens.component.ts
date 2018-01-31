import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {
  @Input() itens: any[] = [];
  @Input() rows: number;
  @Input() total: number;
  @Output() carregarItensEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  carregarItens(event) {
    this.carregarItensEvent.emit(event);
  }
}
