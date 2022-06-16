import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlanningComponent } from './home/planning.component';
import { PlanningService } from './home/planning.service';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApplicationModule } from './routing/application.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AfficherCoursComponent } from './page/cours/afficher-cours/afficher-cours.component';
import { AfficherEleveComponent } from './page/eleve/afficher-eleve/afficher-eleve.component';
import { AfficherNiveauComponent } from './page/niveau/afficher-niveau/afficher-niveau.component';
import { AfficherSalleComponent } from './page/salle/afficher-salle/afficher-salle.component';
import { CreerCoursComponent } from './page/cours/creer-cours/creer-cours.component';
import { CreerEleveComponent } from './page/eleve/creer-eleve/creer-eleve.component';
import { CreerNiveauComponent } from './page/niveau/creer-niveau/creer-niveau.component';
import { CreerSalleComponent } from './page/salle/creer-salle/creer-salle.component';


@NgModule({
  declarations: [
    PlanningComponent,
    HeaderComponent,
    CreerEleveComponent,
    AfficherEleveComponent,
    CreerSalleComponent,
    AfficherSalleComponent,
    CreerNiveauComponent,
    AfficherNiveauComponent,
    CreerCoursComponent, 
    AfficherCoursComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    ApplicationModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [PlanningService],
  bootstrap: [PlanningComponent]
})
export class AppModule { }
