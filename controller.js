
const editingMode = { rect: 0, line: 1 };

class Pencil {
	constructor(ctx, dessin, canvas) {
        this.dessin = dessin;
        this.currEditingMode = editingMode.line;
        this.currLineWidth = 5;
        this.currColour = '#FFFFF';
        this.currentShape = 0;
        new DnD(canvas, this);

        // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    }


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd


    onInteractionStart(dnd)
    {
        if(this.currEditingMode == editingMode.line){
            this.currentShape = new Line(dnd.posInit_x, dnd.posInit_y, dnd.posFin_x, dnd.posFin_y, this.currLineWidth, this.currColour);
            this.currentShape.paint(ctx, canvas);
        }
        else{
            this.currentShape = new Rectangle(dnd.posInit_x, dnd.posInit_y, dnd.posFin_y - dnd.posInit_y , dnd.posFin_x - dnd.posInit_x, this.currLineWidth, this.currColour);
            this.currentShape.paint(ctx, canvas);
        }
        this.dessin.addForme(this.currentShape);
    }

    onInteractionUpdate(dnd)
    {
        if(this.currEditingMode == editingMode.line){
            this.currentShape.x2 = dnd.posFin_x;
            this.currentShape.y2 = dnd.posFin_y;

            this.currentShape.paint(ctx, canvas);
        }
        else{
            this.currentShape.ptHG_x = dnd.posFin_x;
            this.currentShape.ptHG_y = dnd.posFin_y;

            this.currentShape.paint(ctx, canvas);
        }
        this.dessin.paint(ctx, canvas);
    }

    onInteractionEnd(dnd)
    {
        /*
        if(this.currEditingMode == editingMode.line){
            this.currentShape = new Line(dnd.posInit_x, dnd.posInit_y, dnd.posFin_x, dnd.posFin_y, this.currLineWidth, this.currColour);

        }
        else{
            this.currentShape = new Rectangle(dnd.posInit_x, dnd.posInit_y, dnd.posFin_y - dnd.posInit_y , dnd.posFin_x - dnd.posInit_x, this.currLineWidth, this.currColour);
        }
        this.dessin.addForme(this.currentShape);
        */
    }
    
}


