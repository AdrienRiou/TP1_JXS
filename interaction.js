
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
class DnD{
    constructor(canvas, interactor){
        this.canvas = canvas;
        this.interactor = interactor;

		// Définir ici les attributs de la classe
		var posInit_x=0;
		var posInit_y=0;

		var posFin_x=0;
		var posFin_y=0;

		var isPressed=false;

        // Associer les évènements du canvas aux fonctions ci-dessous.
        canvas.addEventListener('mousedown', this.userPression.bind(this));
        canvas.addEventListener('mousemove', this.userDeplacement.bind(this));
        canvas.addEventListener('mouseup', this.userRelachement.bind(this));        
    }

	// Developper les 3 fonctions gérant les événements
	userPression(evt)
	{
		this.posInit_x = getMousePosition(canvas, evt).x;
		this.posInit_y = getMousePosition(canvas, evt).y;
		this.isPressed = true;

		this.interactor.onInteractionStart(this);

	}
	
	userDeplacement(evt)
	{
		if(this.isPressed)
		{
			this.posFin_x = getMousePosition(canvas, evt).x;
			this.posFin_y = getMousePosition(canvas, evt).y;

			this.interactor.onInteractionUpdate(this);
		}
	}
	
	userRelachement(evt)
	{
		if(this.isPressed)
		{
			this.posFin_x = getMousePosition(canvas, evt).x;
			this.posFin_y = getMousePosition(canvas, evt).y;
			this.isPressed = false;
		}
		this.interactor.onInteractionEnd(this);

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



