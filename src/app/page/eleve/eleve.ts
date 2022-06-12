import { Niveau } from "../niveau/niveau";

export interface Eleve {
    id: number;
    nom: string;
    prenom: string;
    age: number;
    adresse: string;
    niveau: Niveau;
}