import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherEleveComponent } from '../page/eleve/afficher-eleve/afficher-eleve.component';
import { EleveComponent } from '../page/eleve/creer-eleve/eleve.component';
import { EleveHomeComponent } from '../page/eleve/eleve-home/eleve-home.component';

const routes: Routes = [
  { path:"eleve", component: EleveHomeComponent},
  { path:"eleve/creation", component: EleveComponent},
  { path:"eleve/consultation", component: AfficherEleveComponent},
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
