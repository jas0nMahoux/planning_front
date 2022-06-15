import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherCoursComponent } from '../page/cours/afficher-cours/afficher-cours.component';
import { CreerCoursComponent } from '../page/cours/creer-cours/creer-cours.component';
import { AfficherEleveComponent } from '../page/eleve/afficher-eleve/afficher-eleve.component';
import { EleveComponent } from '../page/eleve/creer-eleve/eleve.component';
import { AfficherNiveauComponent } from '../page/niveau/afficher-niveau/afficher-niveau.component';
import { CreerNiveauComponent } from '../page/niveau/creer-niveau/creer-niveau.component';
import { AfficherSalleComponent } from '../page/salle/afficher-salle/afficher-salle.component';
import { CreerSalleComponent } from '../page/salle/creer-salle/creer-salle.component';

const routes: Routes = [
  { path:"eleve/creation", component: EleveComponent},
  { path:"eleve/consultation", component: AfficherEleveComponent},

  { path:"salle/creation", component: CreerSalleComponent},
  { path:"salle/consultation", component: AfficherSalleComponent},

  { path:"niveau/creation", component: CreerNiveauComponent},
  { path:"niveau/consultation", component: AfficherNiveauComponent},

  { path:"cours/creation", component: CreerCoursComponent},
  { path:"cours/consultation", component: AfficherCoursComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot([])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
