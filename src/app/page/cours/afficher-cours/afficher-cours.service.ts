import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cours } from '../cours'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AfficherCoursService {
  
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public removeCours(c:Cours): Observable<Cours[]>{
    return this.http.delete<Cours[]>(`${this.apiServerUrl}/deleteCours/${c.id}`)
  }

  public updateCours(c:FormGroup): Observable<Cours> {
    return this.http.put<Cours>(`${this.apiServerUrl}/updateCours`, c.value)
  }

  public afficherCoursBySalle(): Observable<Cours[]> {
    return this.http.get<Cours[]>(`${this.apiServerUrl}/findAllCours/salle`)
  }
}
