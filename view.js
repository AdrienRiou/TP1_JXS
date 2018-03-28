
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Forme.prototype.paint = function(ctx){
	console.log(this)
	ctx.fillStyle = this.couleur;
	ctx.lineWidth = this.epaisseurT;

	//this.forme.foreach((shape) => shape.paint)
}

Dessin.prototype.paint = function(ctx){
	ctx.fillStyle = '#F0F0F0'; // set canvas' background color
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

Rectangle.prototype.paint = function(ctx){
	Object.getPrototypeOf(this.__proto__).paint.call(this, ctx);
	ctx.beginPath();
	ctx.rect(this.ptHG_X, this.ptHG_Y, this.hauteur, this.longueur);
	ctx.stroke();
}

Line.prototype.paint = function(ctx){
	Object.getPrototypeOf(this.__proto__).paint.call(this, ctx);
	ctx.beginPath();
	ctx.moveTo(this.x1, this.y1);
	ctx.lineTo(this.x2, this.y2);
	ctx.stroke();
}



