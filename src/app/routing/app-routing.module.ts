import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherEleveComponent } from '../page/eleve/afficher-eleve/afficher-eleve.component';
import { EleveComponent } from '../page/eleve/creer-eleve/eleve.component';
import { EleveHomeComponent } from '../page/eleve/eleve-home/eleve-home.component';
import { AfficherNiveauComponent } from '../page/niveau/afficher-niveau/afficher-niveau.component';
import { CreerNiveauComponent } from '../page/niveau/creer-niveau/creer-niveau.component';
import { NiveauHomeComponent } from '../page/niveau/niveau-home/niveau-home.component';
import { AfficherSalleComponent } from '../page/salle/afficher-salle/afficher-salle.component';
import { CreerSalleComponent } from '../page/salle/creer-salle/creer-salle.component';
import { SalleHomeComponent } from '../page/salle/salle-home/salle-home.component';

const routes: Routes = [
  { path:"eleve", component: EleveHomeComponent},
  { path:"eleve/creation", component: EleveComponent},
  { path:"eleve/consultation", component: AfficherEleveComponent},
  { path:"salle", component: SalleHomeComponent},
  { path:"salle/creation", component: CreerSalleComponent},
  { path:"salle/consultation", component: AfficherSalleComponent},
  { path:"niveau", component: NiveauHomeComponent},
  { path:"niveau/creation", component: CreerNiveauComponent},
  { path:"niveau/consultation", component: AfficherNiveauComponent},
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
