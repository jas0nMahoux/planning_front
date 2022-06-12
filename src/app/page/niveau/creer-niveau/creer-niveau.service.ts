import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Niveau } from '../niveau'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class CreerNiveauService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public creerNiveau(niveau: FormGroup): Observable<Niveau> {
        return this.http.post<Niveau>(`${this.apiServerUrl}/save`, niveau.value)
    }

    public getAllNiveau(): Observable<Niveau[]> {
        return this.http.get<Niveau[]>(`${this.apiServerUrl}/findAllNiveau`)
    }
}