import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { MenuComponent } from "../../components/menu/menu.component";

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [FooterComponent, MenuComponent],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent {

}
