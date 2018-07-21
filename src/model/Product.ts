export class Product {
    Id: number;
    Nume: string;
    Descriere: string;
    Pret: number;
    Categorie: string;
    Activ: boolean;
    Nou: boolean;
    ImgUrl: string;
    Cantitate: number;

    constructor(Id: number, Nume: string, Descriere: string, Pret: number,
        Categorie: string, Activ: boolean, Nou: boolean, ImgUrl: string, Cantitate: number) {

        this.Id = Id;
        this.Nume = Nume;
        this.Descriere = Descriere;
        this.Pret = Pret;
        this.Categorie = Categorie;
        this.Activ = Activ;
        this.Nou = Nou;
        this.ImgUrl = ImgUrl;
        this.Cantitate = Cantitate;
    }
}
