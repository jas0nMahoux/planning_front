import { Component, OnInit } from '@angular/core';
import { EleveService } from '../creer-eleve/creer-eleve.service';
import { Eleve } from '../eleve';
import { HttpErrorResponse } from '@angular/common/http';
import { AfficherEleveService } from './afficher-eleve.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Niveau } from '../../niveau/niveau';
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
    nom: new FormControl(),
    prenom: new FormControl(),
    age: new FormControl(),
    adresse: new FormControl(),
    niveau: new FormControl()
  });
  
  modif = false
  eleveModif: Eleve;

  niv: Niveau[];

  constructor(private eleveService: EleveService, private afficherEleveService: AfficherEleveService) { }

  ngOnInit(): void {
    this.eleveService.getAllEleve().subscribe(
      (response: Eleve[]) => {
        this.allEleve = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  submit(e:FormGroup) {
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

}
