import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Cours } from '../cours'
import { Niveau } from '../../niveau/niveau';
import { CreerCoursService } from './creer-cours.service';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Salle } from '../../salle/salle';

@Component({
  selector: 'app-creer-cours',
  templateUrl: 'creer-cours.component.html',
  styleUrls: ['creer-cours.component.css']
})
export class CreerCoursComponent implements OnInit{
  cours: Cours;
  niv: Niveau[];
  salles: Salle[];
  cree = false;

  coursForm = new FormGroup({
    id: new FormControl(),
    dateDebut: new FormControl(),
    dateFin: new FormControl(),
    niveau: new FormControl(),
    salle: new FormControl()
  });

  constructor(private coursService: CreerCoursService) {}

  submit() {
    this.createCours(this.coursForm);
    this.cree = true;
  }

  ngOnInit(): void {
    
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
