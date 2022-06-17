import { Component, OnInit } from '@angular/core';
import { CreerCoursService } from '../creer-cours/creer-cours.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AfficherCoursService } from './afficher-cours.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Niveau } from '../../niveau/niveau';
//import { number } from 'echarts';
import { Cours } from '../cours';
import { Salle } from '../../salle/salle';
import { CreerNiveauService } from '../../niveau/creer-niveau/creer-niveau.service';
import { SalleService } from '../../salle/creer-salle/creer-salle.service';

@Component({
  selector: 'app-afficher-cours',
  templateUrl: './afficher-cours.component.html',
  styleUrls: ['./afficher-cours.component.css']
})
export class AfficherCoursComponent implements OnInit {
  allCours: Cours[];
  niv: Niveau[];
  salles: Salle[];

  coursForm = new FormGroup({
    id: new FormControl(),
    debut: new FormControl(),
    fin: new FormControl(),
    niveau: new FormControl(),
    salle: new FormControl()
  });
  
  modif = false
  coursModif: Cours;

  constructor(private creerCoursService: CreerCoursService, private afficherCoursService: AfficherCoursService,
     private niveauService: CreerNiveauService, private salleService: SalleService) { }

  ngOnInit(): void {
    this.allCours = [];
    this.creerCoursService.getAllCours().subscribe(
      (response: Cours[]) => {
        this.allCours = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    this.niveauService.getAllNiveau().subscribe(
      (response: Niveau[]) => {
        this.niv = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    this.salleService.getAllSalle().subscribe(
      (response: Salle[]) => {
        this.salles = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  submit(c:FormGroup) {
    this.afficherCoursService.updateCours(c).subscribe();
    this.modif = false;
  }

  public removeCours(c:Cours):void {
    this.afficherCoursService.removeCours(c).subscribe(
      (response: Cours[]) => {
        this.allCours = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  // Cette fonction ne marche pas
  public updateCours(c:Cours):void {
    this.coursModif = c;
    this.coursForm.controls['id'].setValue(c.id);
    this.coursForm.controls['debut'].setValue(this.coursModif.debut);
    this.coursForm.controls['fin'].setValue(this.coursModif.fin);
    this.coursForm.controls['niveau'].setValue(this.coursModif.niveau);
    this.coursForm.controls['salle'].setValue(this.coursModif.salle);
    this.modif = true;
  }

  public sortCoursBySalle(): void {
    this.afficherCoursService.afficherCoursBySalle().subscribe(
      (response: Cours[]) => {
        this.allCours = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
