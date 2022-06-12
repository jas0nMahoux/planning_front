import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Niveau } from '../niveau'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AfficherNiveauService {
  
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public removeNiveau(n:Niveau): Observable<Niveau>{
    return this.http.delete<Niveau>(`${this.apiServerUrl}/deleteNiveau/${n.id}`)
  }

  public updateNiveau(n:FormGroup): Observable<Niveau> {
    return this.http.put<Niveau>(`${this.apiServerUrl}/updateNiveau`, n.value)
  }
}
