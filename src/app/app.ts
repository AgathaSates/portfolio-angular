import { Component } from '@angular/core';
import { AsBottomNavbar } from './components/as-bottom-navbar/as-bottom-navbar';
import { AsNavbar } from './components/as-navbar/as-navbar';
import { AsCard } from './components/as-card/as-card';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_PROJECTS } from './data/portfolio-projects.data';
import type { PortfolioProject } from './models/portfolio-project';
import { AsProjectModal } from './components/as-project-modal/as-project-modal';
import { AsImageRingHighlights } from './components/as-image-ring-highlights/as-image-ring-highlights';
import { Highlights } from './models/highlights';
import { HIGHLIGHTS_LIST } from './data/highlights.data';
import { AsImageRingProfile } from './components/as-image-ring-profile/as-image-ring-profile';
import { AsProfileBio } from './components/as-profile-bio/as-profile-bio';

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
    AsProfileBio,
  ],
  templateUrl: './app.html',
})
export class App {
  public readonly highlightsList: readonly Highlights[] = HIGHLIGHTS_LIST;
  public readonly projects: readonly PortfolioProject[] = PORTFOLIO_PROJECTS;
  public linkLinkedin: string = 'https://www.linkedin.com/in/agatha-sates-4537a7355';
  public linkEmail: string =
    'mailto:agathasates.dev@gmail.com?subject=Contato%20via%20portf%C3%B3lio&body=Olá%2C%20gostaria%20de%20entrar%20em%20contato%20com%20você.';
  public authorName: string = 'Agatha Sates';
  public tecnologyQuantity: string = '40';
  public certificatesQuantity: string = '5';
  public bio: string = `Me chamo Agatha Sates, tenho 24 anos e sou de Canoas/RS. Iniciei recentemente minha jornada no
  mundo da programação. Atualmente, estou estudando para me tornar uma desenvolvedora Full-Stack
  pela
  <a
    class="text-decoration-none app-mention-academia"
    href="https://academiadoprogramador.net/inicio"
    target="_blank"
    rel="noopener noreferrer"
    ><strong>Academia do Programador</strong></a
  >. 💻✨`;
}
