
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

class Dessin{
	constructor(){
		this.tabForm = new Array();
	}

	addForme(forme) {
		this.tabForm.push(forme);
	}

	removeForm(i){
        this.formes.splice(i,1);
    }
	
}

class Forme{
	constructor(epaiss, couleur, nom){
		this.epaisseurT = epaiss;
		this.couleur = couleur;
		this.nom = nom;
	}

}

class Rectangle extends Forme{
	constructor(x, y, h, l, epaiss, couleur, nom){
		super(epaiss, couleur, nom);
		this.x = x;
		this.y = y;
		this.hauteur = h;
		this.longueur = l;
	}
}

class Line extends Forme{
	constructor(x1, y1, x2, y2, epaiss, couleur, nom){
		super(epaiss, couleur, nom);
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
	}
}


