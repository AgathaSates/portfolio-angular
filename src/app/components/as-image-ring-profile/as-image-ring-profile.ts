import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-image-ring-profile',
  templateUrl: './as-image-ring-profile.html',
  styleUrl: './as-image-ring-profile.scss',
})
export class AsImageRingProfile {
  @Input({ required: true }) public profileImage!: string;
  @Input({ required: true }) public altImage!: string;
}
