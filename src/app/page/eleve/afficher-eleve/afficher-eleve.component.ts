import { Component, OnInit } from '@angular/core';
import { EleveService } from '../creer-eleve/eleve.service';
import { Eleve } from '../eleve';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-afficher-eleve',
  templateUrl: './afficher-eleve.component.html',
  styleUrls: ['./afficher-eleve.component.css']
})
export class AfficherEleveComponent implements OnInit {
  allEleve: Eleve[];

  constructor(private eleveService: EleveService) { }

  ngOnInit(): void {
    this.eleveService.getAllEleve().subscribe(
      (response: Eleve[]) => {
        this.allEleve = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
