
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

class Dessin{
	contructor(tabForm){
		this.tabForm = tabForm;
	}
	
}

class Forme{
	constructor(epaiss, couleur){
		this.epaisseurT = epaiss;
		this.couleur = couleur;
	}

}

class Rectangle extends Forme{
	constructor(ptHG_X, ptHG_Y, h, l, epaiss, couleur){
		super(epaiss, couleur);
		this.ptHG_X = ptHG_X;
		this.ptHG_Y = ptHG_Y;
		this.hauteur = h;
		this.longueur = l;
	}
}

class Line extends Forme{
	constructor(x1, y1, x2, y2, epaiss, couleur){
		super(epaiss, couleur);
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
	}
}


