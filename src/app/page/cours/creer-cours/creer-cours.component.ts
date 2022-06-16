import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Cours } from '../cours'
import { Niveau } from '../../niveau/niveau';
import { CreerCoursService } from './creer-cours.service';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Salle } from '../../salle/salle';
import { SalleService } from '../../salle/creer-salle/creer-salle.service';
import { CreerNiveauService } from '../../niveau/creer-niveau/creer-niveau.service';

@Component({
  selector: 'app-creer-cours',
  templateUrl: 'creer-cours.component.html',
  styleUrls: ['creer-cours.component.css']
})

export class CreerCoursComponent implements OnInit{
  cours: Cours;
  niveaux: Niveau[];
  salles: Salle[];
  cree = false;

  coursForm = new FormGroup({
    id: new FormControl(),
    debut: new FormControl(),
    fin: new FormControl(),
    niveau: new FormControl(),
    salle: new FormControl()
  });

  
  
  constructor(
    private coursService: CreerCoursService, 
    private niveauService: CreerNiveauService,
    private salleService: SalleService) {}

  submit() {
    this.createCours(this.coursForm);
    this.cree = true;
  }

  ngOnInit(): void {
    this.salleService.getAllSalle().subscribe(
      (response: Salle[]) => {
        this.salles = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    this.niveauService.getAllNiveau().subscribe(
      (response: Niveau[]) => {
        this.niveaux = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  
  public createCours(cours: FormGroup): void {
    this.coursService.creerCours(cours).subscribe(
      (response: Cours) => {
        this.cours = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public creerAutreCours(): void {
    this.cree = false;
  }
}