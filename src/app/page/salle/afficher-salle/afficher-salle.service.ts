import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salle } from '../salle'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AfficherSalleService {
  
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public removeSalle(s:Salle): Observable<Salle>{
    return this.http.delete<Salle>(`${this.apiServerUrl}/deleteSalle/${s.id}`)
  }

  public updateSalle(s:FormGroup): Observable<Salle> {
    return this.http.put<Salle>(`${this.apiServerUrl}/updateSalle`, s.value)
  }
}
