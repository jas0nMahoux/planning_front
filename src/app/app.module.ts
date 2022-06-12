import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlanningComponent } from './home/planning.component';
import { PlanningService } from './home/planning.service';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EleveComponent } from './page/eleve/creer-eleve/eleve.component';
import { ApplicationModule } from './routing/application.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { AfficherEleveComponent } from './page/eleve/afficher-eleve/afficher-eleve.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreerSalleComponent } from './page/salle/creer-salle/creer-salle.component';
import { EleveHomeComponent } from './page/eleve/eleve-home/eleve-home.component';
import { NiveauHomeComponent } from './page/niveau/niveau-home/niveau-home.component';
import { AfficherSalleComponent } from './page/salle/afficher-salle/afficher-salle.component';
import { SalleHomeComponent } from './page/salle/salle-home/salle-home.component';
import { CreerNiveauComponent } from './page/niveau/creer-niveau/creer-niveau.component';
import { AfficherNiveauComponent } from './page/niveau/afficher-niveau/afficher-niveau.component';
import { CreerCoursComponent } from './page/cours/creer-cours/creer-cours.component';
import { AfficherCoursComponent } from './page/cours/afficher-cours/afficher-cours.component';
import { CoursHomeComponent } from './page/cours/cours-home/cours-home.component';

@NgModule({
  declarations: [
    PlanningComponent,
    HeaderComponent,
    EleveComponent,
    AfficherEleveComponent,
    CreerSalleComponent,
    EleveHomeComponent,
    AfficherSalleComponent,
    SalleHomeComponent,
    CreerNiveauComponent,
    AfficherNiveauComponent,
    NiveauHomeComponent,
    CreerCoursComponent, 
    AfficherCoursComponent, 
    CoursHomeComponent
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
