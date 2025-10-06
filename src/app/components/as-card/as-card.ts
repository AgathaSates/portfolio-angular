import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-as-card',
  imports: [],
  templateUrl: './as-card.html',
  styleUrl: './as-card.scss',
})
export class AsCard {
  @Input({ required: true }) public urlGifCard!: string;
  @Input({ required: true }) public titleCard!: string;
  @Input({ required: true }) public altCard!: string;
  @Input({ required: true }) public linkRepository!: string;
  @Input() modalId: string = 'projectModal';
}
