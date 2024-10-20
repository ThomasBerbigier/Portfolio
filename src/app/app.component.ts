import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { MenuComponent } from "./components/menu/menu.component";
import { PresentationComponent } from "./pages/presentation/presentation.component";
import { ProjetsComponent } from "./pages/projets/projets.component";
import { Projet1Component } from './pages/projet1/projet1.component';
import { Projet2Component } from './pages/projet2/projet2.component';
import { Projet3Component } from './pages/projet3/projet3.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, MenuComponent, PresentationComponent, ProjetsComponent, Projet1Component, Projet2Component, Projet3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Berbigier_Thomas_Portfolio';

  // Cette propriété sera vraie si l'utilisateur est sur la page d'accueil
  isHomePage: boolean = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    // Écouter les événements de navigation pour vérifier la route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Vérification de l'URL actuelle
        const currentUrl = this.router.url;

        // Si l'URL est la racine ('/') ou '/projets', considérer que c'est la page d'accueil
        this.isHomePage = (currentUrl === '/' || currentUrl === '/projets' || currentUrl === '/projets/');
        
        // Forcer la détection des changements après mise à jour de la route
        this.cdr.detectChanges();

        // Forcer le défilement vers le haut de la page après la navigation
        window.scrollTo(0, 0);
      });
  }
}


