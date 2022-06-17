import { Component, OnInit } from '@angular/core';
import { EleveService } from '../creer-eleve/creer-eleve.service';
import { Eleve } from '../eleve';
import { HttpErrorResponse } from '@angular/common/http';
import { AfficherEleveService } from './afficher-eleve.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Niveau } from '../../niveau/niveau';
import { AfficherNiveauService } from '../../niveau/afficher-niveau/afficher-niveau.service';
import { CreerNiveauService } from '../../niveau/creer-niveau/creer-niveau.service';
//import { number } from 'echarts';

@Component({
  selector: 'app-afficher-eleve',
  templateUrl: './afficher-eleve.component.html',
  styleUrls: ['./afficher-eleve.component.css']
})
export class AfficherEleveComponent implements OnInit {
  allEleve: Eleve[];

  eleveForm = new FormGroup({
    id: new FormControl(),
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    niveau: new FormControl('', [Validators.required])
  });
  
  modif = false
  eleveModif: Eleve;

  niv: Niveau[];

  constructor(private eleveService: EleveService, private afficherEleveService: AfficherEleveService,
    private creerNiveauService: CreerNiveauService) { }

  ngOnInit(): void {
    this.allEleve = [];
    this.eleveService.getAllEleve().subscribe(
      (response: Eleve[]) => {
        this.allEleve = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    this.creerNiveauService.getAllNiveau().subscribe(
      (response: Niveau[]) => {
        this.niv = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )      
  }

  submit(e:FormGroup) {
    if (this.eleveForm.invalid) {
      return;
    }
    this.afficherEleveService.updateEleve(e).subscribe();
    this.modif = false;
  }

  public removeEleve(e:Eleve):void {
    this.afficherEleveService.removeEleve(e).subscribe();
  }

  public updateEleve(e:Eleve):void {
    this.eleveModif = e;
    this.eleveForm.controls['id'].setValue(e.id);
    this.eleveForm.controls['nom'].setValue(this.eleveModif.nom);
    this.eleveForm.controls['prenom'].setValue(this.eleveModif.prenom);
    this.eleveForm.controls['age'].setValue(this.eleveModif.age);
    this.eleveForm.controls['adresse'].setValue(this.eleveModif.adresse);
    this.eleveForm.controls['niveau'].setValue(this.eleveModif.niveau);
    this.modif = true;
  }

  public sortEleveByNom(): void {
    this.afficherEleveService.afficherEleveByNom().subscribe(
      (response: Eleve[]) => {
        this.allEleve = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public sortEleveByPrenom(): void {
    this.afficherEleveService.afficherEleveByPrenom().subscribe(
      (response: Eleve[]) => {
        this.allEleve = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public sortEleveByAge(): void {
    this.afficherEleveService.afficherEleveByAge().subscribe(
      (response: Eleve[]) => {
        this.allEleve = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public sortEleveByNiveau(): void {
    this.afficherEleveService.afficherEleveByNiveau().subscribe(
      (response: Eleve[]) => {
        this.allEleve = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
