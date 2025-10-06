import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-as-image-ring-profile',
  imports: [],
  templateUrl: './as-image-ring-profile.html',
  styleUrl: './as-image-ring-profile.scss',
})
export class AsImageRingProfile {
  @Input({ required: true }) public profileImage!: string;
}
