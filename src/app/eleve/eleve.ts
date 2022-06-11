export interface Eleve {
    id: number;
    nom: string;
    prenom: string;
    age: number;
    niveau: {
        id: number;
        code: string;
        libelle: string;
    }
}