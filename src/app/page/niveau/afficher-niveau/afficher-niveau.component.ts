import { Component, OnInit } from '@angular/core';
import { CreerNiveauService } from '../creer-niveau/creer-niveau.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AfficherNiveauService } from './afficher-niveau.service';
import { FormControl, FormGroup } from '@angular/forms';
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
    code: new FormControl(),
    libelle: new FormControl()
  });
  
  modif = false
  niveauModif: Niveau;

  constructor(private creerNiveauService: CreerNiveauService, private afficherNiveauService: AfficherNiveauService) { }

  ngOnInit(): void {
    this.creerNiveauService.getAllNiveau().subscribe(
      (response: Niveau[]) => {
        this.allNiveau = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  submit(n:FormGroup) {
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
