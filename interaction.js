
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
class DnD{
    constructor(canvas, interactor){
        this.canvas = canvas;
        this.interactor = interactor;

<<<<<<< HEAD
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
=======
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
>>>>>>> e4f2d0fc4325ef771f343e21bb672a5b01bac1b3
    }

	// Developper les 3 fonctions gérant les événements
	userPression(evt)
	{
<<<<<<< HEAD
		this.posInit_x = getMousePosition(canvas, evt).x;
		this.posInit_y = getMousePosition(canvas, evt).y;
		this.isPressed = true;

		this.interactor.onInteractionStart(this);

=======
		interactor.onInteractionStart(this);
		this.posInit_x = evt.x;
		this.posInit_y = evt.y;
		this.isPressed = true;
		console.log(this.posInit_x);
		console.log(this.posInit_y);
>>>>>>> e4f2d0fc4325ef771f343e21bb672a5b01bac1b3
	}
	
	userDeplacement(evt)
	{
<<<<<<< HEAD
		if(this.isPressed)
		{
			this.posFin_x = getMousePosition(canvas, evt).x;
			this.posFin_y = getMousePosition(canvas, evt).y;

			this.interactor.onInteractionUpdate(this);
=======
		interactor.onInteractionUpdate(this);
		if(this.isPressed)
		{
			this.posFin_x = evt.x;
			this.posFin_y = evt.y;
			console.log(this.posFin_x);
			console.log(this.posFin_y);
>>>>>>> e4f2d0fc4325ef771f343e21bb672a5b01bac1b3
		}
	}
	
	userRelachement(evt)
	{
<<<<<<< HEAD
		if(this.isPressed)
		{
			this.posFin_x = getMousePosition(canvas, evt).x;
			this.posFin_y = getMousePosition(canvas, evt).y;
			this.isPressed = false;
		}
		this.interactor.onInteractionEnd(this);

=======
		interactor.onInteractionEnd(this);
		if(this.isPressed)
		{
			this.posFin_x = evt.x;
			this.posFin_y = evt.y;
			this.isPressed = false;
			console.log(this.posFin_x);
			console.log(this.posFin_y);
		}
>>>>>>> e4f2d0fc4325ef771f343e21bb672a5b01bac1b3
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



