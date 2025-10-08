import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-buttons',
  templateUrl: './as-buttons.html',
  styleUrl: './as-buttons.scss',
})
export class AsButtons {
  @Input() public link!: string;
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public message!: string;

  public openLink(url: string): void {
    window.open(url, '_blank', 'noopener');
  }
}
