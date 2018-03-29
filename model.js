
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

class Dessin{
<<<<<<< HEAD
	constructor(){
		this.tabForm = new Array();
	}

	addForme(forme) {
		this.tabForm.push(forme);
	}

	removeForm(i){
        this.formes.splice(i,1);
    }
=======
	contructor(tabForm){
		this.tabForm = tabForm;
	}
>>>>>>> e4f2d0fc4325ef771f343e21bb672a5b01bac1b3
	
}

class Forme{
<<<<<<< HEAD
	constructor(epaiss, couleur, nom){
		this.epaisseurT = epaiss;
		this.couleur = couleur;
		this.nom = nom;
=======
	constructor(epaiss, couleur){
		this.epaisseurT = epaiss;
		this.couleur = couleur;
>>>>>>> e4f2d0fc4325ef771f343e21bb672a5b01bac1b3
	}

}

class Rectangle extends Forme{
<<<<<<< HEAD
	constructor(x, y, h, l, epaiss, couleur, nom){
		super(epaiss, couleur, nom);
		this.x = x;
		this.y = y;
=======
	constructor(ptHG_X, ptHG_Y, h, l, epaiss, couleur){
		super(epaiss, couleur);
		this.ptHG_X = ptHG_X;
		this.ptHG_Y = ptHG_Y;
>>>>>>> e4f2d0fc4325ef771f343e21bb672a5b01bac1b3
		this.hauteur = h;
		this.longueur = l;
	}
}

class Line extends Forme{
<<<<<<< HEAD
	constructor(x1, y1, x2, y2, epaiss, couleur, nom){
		super(epaiss, couleur, nom);
=======
	constructor(x1, y1, x2, y2, epaiss, couleur){
		super(epaiss, couleur);
>>>>>>> e4f2d0fc4325ef771f343e21bb672a5b01bac1b3
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
	}
}


