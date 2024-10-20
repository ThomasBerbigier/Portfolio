import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetsComponent } from './pages/projets/projets.component';
import { Projet1Component } from './pages/projet1/projet1.component';
import { Projet2Component } from './pages/projet2/projet2.component';
import { Projet3Component } from './pages/projet3/projet3.component';
import { AproposComponent } from './pages/apropos/apropos.component';

export const routes: Routes = [
    { path: '', component: ProjetsComponent },
    { path: 'projets', component: ProjetsComponent },
    { path: 'projet1', component: Projet1Component },
    { path: 'projet2', component: Projet2Component },
    { path: 'projet3', component: Projet3Component },
    { path: 'apropos', component: AproposComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false, scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})

export class AppRoutingModule { }

