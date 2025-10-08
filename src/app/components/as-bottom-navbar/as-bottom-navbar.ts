import { Component } from '@angular/core';
import { ContentType } from '../../models/bottom-content';

@Component({
  selector: 'as-bottom-navbar',
  templateUrl: './as-bottom-navbar.html',
  styleUrl: './as-bottom-navbar.scss',
})
export class AsBottomNavbar {
  public readonly curriculumVitaeUrl: string = ''; /* colocar "nome.pdf" quando finalizar */
  readonly contentType = ContentType;

  public selectedContentType: ContentType = ContentType.Contact;

  public setSelectedContentType(newType: ContentType): void {
    this.selectedContentType = newType;
  }

  public onPreviewCurriculumVitae(): void {
    window.open(this.curriculumVitaeUrl, '_blank', 'noopener');
  }

  public onDownloadCurriculumVitae(): void {
    const temporaryAnchorElement: HTMLAnchorElement = document.createElement('a');
    temporaryAnchorElement.href = this.curriculumVitaeUrl;
    temporaryAnchorElement.download = ''; /* colocar "nome.pdf" quando finalizar */
    temporaryAnchorElement.click();
    temporaryAnchorElement.remove();
  }
}
