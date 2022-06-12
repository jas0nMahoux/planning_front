import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherEleveComponent } from '../page/eleve/afficher-eleve/afficher-eleve.component';
import { EleveComponent } from '../page/eleve/creer-eleve/eleve.component';

const routes: Routes = [
  { path:"eleve", component: EleveComponent},
  { path:"allEleve", component: AfficherEleveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot([])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
