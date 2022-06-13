import { Eleve } from "../eleve/eleve";
import { Niveau } from "../niveau/niveau";
import { Salle } from "../salle/salle";

export interface Cours {
    id: number;
    debut: Date;
    fin: Date;
    niveau: Niveau;
    salle: Salle;
    eleves: Eleve[];
}