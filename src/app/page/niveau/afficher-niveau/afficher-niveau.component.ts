import { Component, OnInit } from '@angular/core';
import { CreerNiveauService } from '../creer-niveau/creer-niveau.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AfficherNiveauService } from './afficher-niveau.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Niveau } from '../../niveau/niveau';
//import { number } from 'echarts';

@Component({
  selector: 'app-afficher-niveau',
  templateUrl: './afficher-niveau.component.html',
  styleUrls: ['./afficher-niveau.component.css']
})

export class AfficherNiveauComponent implements OnInit {
  allNiveau: Niveau[];

  niveauForm = new FormGroup({
    id: new FormControl(),
    code: new FormControl('', [Validators.required]),
    libelle: new FormControl('', [Validators.required])
  });
  
  modif = false
  niveauModif: Niveau;

  constructor(private creerNiveauService: CreerNiveauService, private afficherNiveauService: AfficherNiveauService) { }

  ngOnInit(): void {
    this.allNiveau = [];
    this.creerNiveauService.getAllNiveau().subscribe(
      (response: Niveau[]) => {
        this.allNiveau = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  submit(n:FormGroup) {
    if (this.niveauForm.invalid) {
      return;
    }
    this.afficherNiveauService.updateNiveau(n).subscribe();
    this.modif = false;
  }

  public removeNiveau(n:Niveau):void {
    this.afficherNiveauService.removeNiveau(n).subscribe();
  }

  public updateNiveau(n:Niveau):void {
    this.niveauModif = n;
    this.niveauForm.controls['id'].setValue(n.id);
    this.niveauForm.controls['code'].setValue(this.niveauModif.code);
    this.niveauForm.controls['libelle'].setValue(this.niveauModif.libelle);
    this.modif = true;
  }

}
