import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherEleveComponent } from '../afficher-eleve/afficher-eleve.component';
import { EleveComponent } from '../eleve/eleve.component';

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
