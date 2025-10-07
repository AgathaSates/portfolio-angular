import { Component, Input } from '@angular/core';
import { HighlightKind, Highlights } from '../../models/highlights';
import { AsImageRingProfile } from '../as-image-ring-profile/as-image-ring-profile';

@Component({
  selector: 'app-as-image-ring-highlights',
  imports: [AsImageRingProfile],
  templateUrl: './as-image-ring-highlights.html',
  styleUrl: './as-image-ring-highlights.scss',
})
export class AsImageRingHighlights {
  @Input({ required: true }) public highlight!: Highlights;
  readonly HighlightKind = HighlightKind;

  get modalId(): string {
    return `modal-${this.highlight.type}`;
  }
  get carouselId(): string {
    return `carousel-${this.highlight.type}`;
  }
}
