import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Salle } from '../salle'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class SalleService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public creerSalle(salle: FormGroup): Observable<Salle> {
        return this.http.post<Salle>(`${this.apiServerUrl}/saveSalle`, salle.value)
    }

    public getAllSalle(): Observable<Salle[]> {
        return this.http.get<Salle[]>(`${this.apiServerUrl}/findAllSalle`)
    }
}