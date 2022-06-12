import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Eleve } from './eleve';
import { EleveService } from './eleve.service';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Niveau } from './niveau';

@Component({
  selector: 'app-eleve',
  templateUrl: 'eleve.component.html',
  styleUrls: ['eleve.component.css']
})
export class EleveComponent implements OnInit{
  eleve: Eleve;
  eleveForm: FormGroup;
  niv: Niveau[];

  constructor(private eleveService: EleveService) {
    this.eleveForm = new FormGroup({
      nom: new FormControl(null),
      prnenom: new FormControl(null),
      age: new FormControl(null),
      adresse: new FormControl(null),
      niveau: new FormControl(null),
    })
  }

  submit (form: NgForm) {
    this.eleve.nom = form.value.nom;
    this.eleve.prenom = form.value.prenom;
    this.eleve.age = form.value.age;
    this.eleve.adresse = form.value.adresse;
    this.eleve.niveau = form.value.niveau;
  }

  ngOnInit(): void {
    
  }
  
  public createEleve(eleve: Eleve): void {
    this.eleveService.creerEleve(eleve).subscribe(
      (response: Eleve) => {
        this.eleve = response;
        
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
