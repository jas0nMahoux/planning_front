import { Eleve } from "../eleve/eleve";
import { Niveau } from "../niveau/niveau";
import { Salle } from "../salle/salle";

export interface Cours {
    id: number;
    dateDebut: Date;
    dateFin: Date;
    niveau: Niveau;
    salle: Salle;
    eleves: Eleve[];
}