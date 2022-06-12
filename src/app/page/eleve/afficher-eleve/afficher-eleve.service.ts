import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eleve } from '../eleve';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AfficherEleveService {
  
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public removeEleve(e:Eleve): Observable<Eleve>{
    return this.http.delete<Eleve>(`${this.apiServerUrl}/delete/${e.id}`)
  }

  public updateEleve(e:FormGroup): Observable<Eleve> {
    return this.http.put<Eleve>(`${this.apiServerUrl}/update`, e.value)
  }
}
