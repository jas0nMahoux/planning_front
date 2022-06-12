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
@NgModule({
  declarations: [
    PlanningComponent,
    HeaderComponent,
    EleveComponent,
    AfficherEleveComponent,
    CreerSalleComponent,
    EleveHomeComponent
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
