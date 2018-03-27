
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
class DnD{
    constructor(canvas, interactor){
        this.canvas = canvas;
        this.interactor = interactor;

        // Définir ici les attributs de la classe
		this.posInit_x = 0;
		this.posInit_y = 0;
		this.posFin_x = 0;
		this.posFin_y = 0;
		this.isPressed = false;
        // Associer les évènements du canvas aux fonctions ci-dessous.
        canvas.addEventListener('mousedown', this.userPression.bind(this), false);
        canvas.addEventListener('mousemove', this.userDeplacement.bind(this), false);
        canvas.addEventListener('mouseup', this.userRelachement.bind(this), false);        
    }

	// Developper les 3 fonctions gérant les événements
	userPression(evt)
	{
		interactor.onInteractionStart(this);
		this.posInit_x = evt.x;
		this.posInit_y = evt.y;
		this.isPressed = true;
		console.log(this.posInit_x);
		console.log(this.posInit_y);
	}
	
	userDeplacement(evt)
	{
		interactor.onInteractionUpdate(this);
		if(this.isPressed)
		{
			this.posFin_x = evt.x;
			this.posFin_y = evt.y;
			console.log(this.posFin_x);
			console.log(this.posFin_y);
		}
	}
	
	userRelachement(evt)
	{
		interactor.onInteractionEnd(this);
		if(this.isPressed)
		{
			this.posFin_x = evt.x;
			this.posFin_y = evt.y;
			this.isPressed = false;
			console.log(this.posFin_x);
			console.log(this.posFin_y);
		}
	}

}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt){
  var rect = canvas.getBoundingClientRect();
  return{
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}



