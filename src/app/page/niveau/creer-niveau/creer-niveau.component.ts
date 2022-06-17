import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Niveau } from '../niveau'
import { CreerNiveauService } from './creer-niveau.service';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creer-niveau',
  templateUrl: 'creer-niveau.component.html',
  styleUrls: ['creer-niveau.component.css']
})
export class CreerNiveauComponent implements OnInit{
  niveau: Niveau;
  niv: Niveau[];
  cree = false;

  niveauForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    libelle: new FormControl('', [Validators.required])
  });

  constructor(private niveauService: CreerNiveauService) {}

  submit() {
    if (this.niveauForm.invalid) {
      return;
    }
    this.createNiveau(this.niveauForm);
    this.cree = true;
  }

  ngOnInit(): void {
    
  }
  
  public createNiveau(niveau: FormGroup): void {
    this.niveauService.creerNiveau(niveau).subscribe(
      (response: Niveau) => {
        this.niveau = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public creerAutreNiveau(): void {
    this.cree = false;
  }
}
