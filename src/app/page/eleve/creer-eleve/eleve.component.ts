import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Eleve } from '../eleve';
import { EleveService } from './eleve.service';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Niveau } from '../niveau';

@Component({
  selector: 'app-eleve',
  templateUrl: 'eleve.component.html',
  styleUrls: ['eleve.component.css']
})
export class EleveComponent implements OnInit{
  eleve: Eleve;
  niv: Niveau[];

  eleveForm = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    age: new FormControl(),
    adresse: new FormControl(),
    niveau: new FormControl()
  })

  constructor(private eleveService: EleveService) {}

  submit() {
    console.log(this.eleveForm)
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
