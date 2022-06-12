import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eleve } from '../eleve';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfficherEleveService {
  
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public removeEleve(e:Eleve): Observable<Eleve>{
    console.log('test');
    return this.http.delete<Eleve>(`${this.apiServerUrl}/save/${e}`)
  }
}
