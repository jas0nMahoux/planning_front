import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Eleve } from './eleve';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EleveService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public creerEleve(eleve: Eleve): Observable<Eleve> {
        return this.http.post<Eleve>(`${this.apiServerUrl}/save`, eleve)
    }

    public getAllEleve(): Observable<Eleve[]> {
        return this.http.get<Eleve[]>(`${this.apiServerUrl}/findAllEleve`)
    }

    /*public calculerMesChoix(mesChoix: String[]): Observable<string> {
        return this.http.post<string>(`${this.apiServerUrl}/pbMath/test`, mesChoix)
    }

    public addResultat(id: number): Observable<PbMath> {
        return this.http.post<PbMath>(`${this.apiServerUrl}/add`, id)
    }

    public updateResultat(id: number): Observable<PbMath> {
        return this.http.put<PbMath>(`${this.apiServerUrl}/update`, id)
    }

    public deleteResultat(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`)
    }*/
}