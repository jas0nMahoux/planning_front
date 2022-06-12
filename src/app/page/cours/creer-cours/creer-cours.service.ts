import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Cours } from '../cours'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class CreerCoursService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public creerCours(cours: FormGroup): Observable<Cours> {
        return this.http.post<Cours>(`${this.apiServerUrl}/saveCours`, cours.value)
    }

    public getAllCours(): Observable<Cours[]> {
        return this.http.get<Cours[]>(`${this.apiServerUrl}/findAllCours`)
    }
}