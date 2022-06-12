import { Component, OnInit } from '@angular/core';
import { AfficherEleveService } from './afficher-eleve.service';
import { Eleve } from '../eleve/eleve';
import { HttpErrorResponse } from '@angular/common/http';
import { EleveService } from '../eleve/eleve.service';

@Component({
  selector: 'app-afficher-eleve',
  templateUrl: './afficher-eleve.component.html',
  styleUrls: ['./afficher-eleve.component.css']
})
export class AfficherEleveComponent implements OnInit {
  allEleve: Eleve[];

  constructor(private afficherEleveService: AfficherEleveService, private eleveService:EleveService) { }

  ngOnInit(): void {
    this.eleveService.getAllEleve().subscribe(
      (response: Eleve[]) => {
        this.allEleve = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public deleteEleve(e:Eleve): void {
    this.afficherEleveService.removeEleve(e).subscribe()
  }

}
