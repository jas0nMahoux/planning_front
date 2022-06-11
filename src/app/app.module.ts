import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlanningComponent } from './planning/planning.component';
import { PlanningService } from './planning/planning.service';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EleveComponent } from './eleve/eleve.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    PlanningComponent,
    HeaderComponent,
    EleveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    CommonModule, 
    AppRoutingModule
  ],
  providers: [PlanningService],
  bootstrap: [PlanningComponent]
})
export class AppModule { }
