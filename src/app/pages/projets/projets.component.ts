import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css',
  encapsulation: ViewEncapsulation.None // Désactive l'encapsulation
})
export class ProjetsComponent {

}

