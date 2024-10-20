import { AfterViewInit, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent implements AfterViewInit{

  ngAfterViewInit() {
    this.checkVisibility(); // Vérifier la visibilité à l'initialisation

    // Ajouter un écouteur d'événements pour le défilement
    window.addEventListener('scroll', this.checkVisibility);
    // Ajouter un écouteur d'événements pour le redimensionnement
    window.addEventListener('resize', this.checkVisibility);
  }

  // Fonction pour vérifier si l'élément est dans la fenêtre d'affichage
  checkVisibility = () => {
    const mesReseaux = document.querySelector('.reseaux-sociaux') as HTMLElement;
    if (mesReseaux) {
      const rect = mesReseaux.getBoundingClientRect(); // Récupérer la position de l'élément
      const isVisible = (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
      if (isVisible) {
        mesReseaux.classList.add('visible'); // Ajouter la classe visible
      }
    }
  }
}
