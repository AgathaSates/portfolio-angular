import { Component, Input } from '@angular/core';
import { PortfolioProject } from '../../models/portfolio-project';

@Component({
  selector: 'as-project-modal',
  templateUrl: './as-project-modal.html',
  styleUrl: './as-project-modal.scss',
})
export class AsProjectModal {
  @Input({ required: true }) public projects!: readonly PortfolioProject[];
}
