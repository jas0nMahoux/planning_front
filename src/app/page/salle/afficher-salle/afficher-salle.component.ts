import { Component, OnInit } from '@angular/core';
import { SalleService } from '../creer-salle/creer-salle.service';
import { Salle } from '../salle';
import { HttpErrorResponse } from '@angular/common/http';
import { AfficherSalleService } from './afficher-salle.service';
import { FormControl, FormGroup } from '@angular/forms';
//import { number } from 'echarts';

@Component({
  selector: 'app-afficher-salle',
  templateUrl: './afficher-salle.component.html',
  styleUrls: ['./afficher-salle.component.css']
})
export class AfficherSalleComponent implements OnInit {
  allSalle: Salle[];

  salleForm = new FormGroup({
    id: new FormControl(),
    capacite: new FormControl(),
    nom: new FormControl(),
    code: new FormControl()
  });
  
  modif = false
  salleModif: Salle;

  constructor(private salleService: SalleService, private afficherSalleService: AfficherSalleService) { }

  ngOnInit(): void {
    this.salleService.getAllSalle().subscribe(
      (response: Salle[]) => {
        this.allSalle = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  submit(s:FormGroup) {
    this.afficherSalleService.updateSalle(s).subscribe();
    this.modif = false;
  }

  public removeSalle(s:Salle):void {
    this.afficherSalleService.removeSalle(s).subscribe();
  }

  public updateSalle(s:Salle):void {
    this.salleModif = s;
    this.salleForm.controls['id'].setValue(s.id);
    this.salleForm.controls['capacite'].setValue(this.salleModif.capacite);
    this.salleForm.controls['nom'].setValue(this.salleModif.nom);
    this.salleForm.controls['code'].setValue(this.salleModif.code);
    this.modif = true;
  }

}
