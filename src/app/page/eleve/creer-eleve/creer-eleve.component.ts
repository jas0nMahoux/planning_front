import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Eleve } from '../eleve';
import { EleveService } from './creer-eleve.service';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Niveau } from '../../niveau/niveau';
import { CreerNiveauService } from '../../niveau/creer-niveau/creer-niveau.service';

@Component({
  selector: 'app-eleve',
  templateUrl: 'creer-eleve.component.html',
  styleUrls: ['creer-eleve.component.css']
})
export class CreerEleveComponent implements OnInit{
  eleve: Eleve;
  niv: Niveau[];
  cree = false;

  eleveForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    niveau: new FormControl('', [Validators.required])
  });

  constructor(
    private eleveService: EleveService, 
    private creerNiveauService: CreerNiveauService) {
  }

  submit() {
    if (this.eleveForm.invalid) {
      return;
    }
    this.createEleve(this.eleveForm);
    this.cree = true;
  }

  ngOnInit(): void {
    this.creerNiveauService.getAllNiveau().subscribe(
      (response: Niveau[]) => {
        this.niv = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  
  public createEleve(eleve: FormGroup): void {
    this.eleveService.creerEleve(eleve).subscribe(
      (response: Eleve) => {
        this.eleve = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public creerAutreEleve(): void {
    this.cree = false;
  }
}
