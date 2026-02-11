import { Component, Input } from '@angular/core';
import { AsButtons } from '../as-buttons/as-buttons';

@Component({
  selector: 'as-profile-bio',
  imports: [AsButtons],
  templateUrl: './as-profile-bio.html',
})
export class AsProfileBio {
  @Input({ required: true }) public linkLinkedin!: string;
  @Input({ required: true }) public linkMessage!: string;
  @Input({ required: true }) public bio!: string;
}
