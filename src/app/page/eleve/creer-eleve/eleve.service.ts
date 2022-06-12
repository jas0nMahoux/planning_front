import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Eleve } from '../eleve';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class EleveService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public creerEleve(eleve: FormGroup): Observable<Eleve> {
        console.log(eleve.value);
        return this.http.post<Eleve>(`${this.apiServerUrl}/save`, eleve.value)
    }

    public getAllEleve(): Observable<Eleve[]> {
        return this.http.get<Eleve[]>(`${this.apiServerUrl}/findAllEleve`)
    }

    

}