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
  public linkMessage: string =
    'https://wa.me/5551985962346?text=Ol%C3%A1%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20entrar%20em%20contato%20sobre%20uma%20oportunidade%20de%20trabalho.';
  public authorName: string = 'Agatha Sates';
  public tecnologyQuantity: string = '40';
  public certificatesQuantity: string = '7';
  public bio: string = `Me chamo Agatha Sates, tenho 24 anos e sou de Canoas/RS. Iniciei recentemente minha jornada no
mundo da programação. Sou formada como Desenvolvedora Full-Stack pela
<a
  class="text-decoration-none app-mention-academia"
  href="https://academiadoprogramador.net/inicio"
  target="_blank"
  rel="noopener noreferrer"
  ><strong>Academia do Programador</strong></a
>. 💻✨
<br/>
Atualmente, estou em busca da minha primeira oportunidade profissional na área, com muita vontade de aprender, evoluir e contribuir com o time. 🚀`;
}
