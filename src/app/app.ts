import { Component } from '@angular/core';
import { AsBottomNavbar } from './components/as-bottom-navbar/as-bottom-navbar';
import { AsNavbar } from './components/as-navbar/as-navbar';
import { AsCard } from './components/as-card/as-card';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_PROJECTS } from './data/portfolio-projects.data';
import type { PortfolioProject } from './models/portfolio-project';
import { AsProjectModal } from './components/as-project-modal/as-project-modal';
import { AsImageRingHighlights } from './components/as-image-ring-highlights/as-image-ring-highlights';
import { AsImageRingProfile } from './components/as-image-ring-profile/as-image-ring-profile';
import { AsButtons } from './components/as-buttons/as-buttons';
import { Highlights } from './models/highlights';
import { HIGHLIGHTS_LIST } from './data/highlights.data';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    AsBottomNavbar,
    AsNavbar,
    AsCard,
    AsProjectModal,
    AsImageRingHighlights,
    AsImageRingProfile,
    AsButtons,
  ],
  templateUrl: './app.html',
})
export class App {
  public readonly highlightsList: readonly Highlights[] = HIGHLIGHTS_LIST;
  public readonly projects: readonly PortfolioProject[] = PORTFOLIO_PROJECTS;
  public linklinkedin: string = 'https://www.linkedin.com/in/agatha-sates-4537a7355';
  public linkemail: string =
    'mailto:agathasates.dev@gmail.com?subject=Contato%20via%20portf%C3%B3lio&body=Olá%2C%20gostaria%20de%20entrar%20em%20contato%20com%20você.';
}
