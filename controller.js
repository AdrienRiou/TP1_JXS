
const editingMode = { rect: 0, line: 1 };

class Pencil {
	constructor(ctx, drawing, canvas) {
        this.currEditingMode = editingMode.line;
        this.currLineWidth = 5;
        this.currColour = '#FFFFF';
        this.currentShape = 0;
        this.dessin = drawing;
        this.ctx = ctx
        new DnD(canvas, this);

        // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    }


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd


    onInteractionStart(dnd){
        if(this.currEditingMode == editingMode.line){
            myLine = new line(dnd.posInit_x, posInit_y, dnd.posFin_x, dnd.posFin_y, this.currLineWidth, this.currColour);
            this.currentShape = myline;
        }
        else{
            myRec = new rectangle(dnd.posInit_x, dnd.posInit_y, dnd.posFin_y - dnd.posInit_y , dnd.posFin_x - dnd.posInit_x, this.currLineWidth, this.currColour)
            this.currentShape = myRec
        }
        this.dessin.add(this.currentShape);
    }

    onInteractionUpdate(dnd){

    }

    onInteractionEnd(dnd){

    }
}


