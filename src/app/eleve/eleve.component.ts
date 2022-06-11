import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Eleve } from './eleve';
import { EleveService } from './eleve.service';

@Component({
  selector: 'app-eleve',
  templateUrl: 'eleve.component.html',
  styleUrls: ['eleve.component.css']
})
export class EleveComponent implements OnInit{
  eleve: Eleve;
  allEleve: Eleve[];

  ngOnInit(): void {
    this.eleveService.getAllEleve().subscribe(
      (response: Eleve[]) => {
        this.allEleve = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  constructor(private eleveService: EleveService) {}
  
  public createEleve(eleve: Eleve): void {
    this.eleveService.creerEleve(eleve).subscribe(
      (response: Eleve) => {
        this.eleve = response;
        
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
