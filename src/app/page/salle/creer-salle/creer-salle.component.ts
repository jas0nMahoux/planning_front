import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SalleService } from './creer-salle.service'
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Salle } from '../salle'


@Component({
  selector: 'app-creer-salle',
  templateUrl: 'creer-salle.component.html',
  styleUrls: ['creer-salle.component.css']
})
export class CreerSalleComponent implements OnInit{
  salle: Salle;
  cree = false;

  salleForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    capacite: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required])
  });

  constructor(private salleService: SalleService) {}

  submit() {
    if (this.salleForm.invalid) {
      return;
    }
    this.createSalle(this.salleForm);
    this.cree = true;
  }

  ngOnInit(): void {
    
  }
  
  public createSalle(salle: FormGroup): void {
    this.salleService.creerSalle(salle).subscribe(
      (response: Salle) => {
        this.salle = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public creerAutreSalle(): void {
    this.cree = false;
  }
}
