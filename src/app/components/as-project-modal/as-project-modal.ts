import { Component } from '@angular/core';
import { PortfolioProject } from '../../models/portfolio-project';
import { PORTFOLIO_PROJECTS } from '../../data/portfolio-projects.data';

@Component({
  selector: 'app-as-project-modal',
  imports: [],
  templateUrl: './as-project-modal.html',
  styleUrl: './as-project-modal.scss',
})
export class AsProjectModal {
  public readonly projects: readonly PortfolioProject[] = PORTFOLIO_PROJECTS;
}
