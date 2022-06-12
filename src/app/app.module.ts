import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlanningComponent } from './planning/planning.component';
import { PlanningService } from './planning/planning.service';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EleveComponent } from './eleve/eleve.component';
import { ApplicationModule } from './routing/application.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { AfficherEleveComponent } from './afficher-eleve/afficher-eleve.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PlanningComponent,
    HeaderComponent,
    EleveComponent,
    AfficherEleveComponent
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
