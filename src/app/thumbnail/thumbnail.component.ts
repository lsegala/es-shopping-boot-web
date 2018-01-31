import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
  @Input() id: number;
  @Input() titulo: string;
  @Input() preco: number;
  @Input() src: string;
  @Input() descricao: string;

  constructor(private router: Router) { }

  detalhe() {
    this.router.navigate(['/detalhe', this.id]);
  }
}
