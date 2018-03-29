
const editingMode = { rect: 0, line: 1 };

class Pencil {
	constructor(ctx, dessin, canvas) {
        this.dessin = dessin;
        this.currEditingMode = editingMode.line;
        this.currLineWidth = 5;
        this.currColour = '#FFFFF';
        this.currentShape = 0;
        this.ctx = ctx;
        this.canvas = canvas;
        new DnD(canvas, this);

        // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    }


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

    updateCurrentShape(dnd) {
        if(this.currEditingMode == editingMode.line){
            this.currentShape = new Line(dnd.posInit_x, dnd.posInit_y, dnd.posFin_x, dnd.posFin_y, this.currLineWidth, this.currColour, "Line");
        }
        else{
            this.currentShape = new Rectangle(dnd.posInit_x, dnd.posInit_y, dnd.posFin_y - dnd.posInit_y , dnd.posFin_x - dnd.posInit_x, this.currLineWidth, this.currColour, "Rectangle");
        }
    }

    onInteractionStart(dnd)
    {
        this.updateCurrentShape(dnd);
        //this.currentShape.paint(this.ctx, this.canvas);
        this.dessin.addForme(this.currentShape);
    }


    onInteractionUpdate(dnd)
    {
        if(this.currEditingMode == editingMode.line){
            this.currentShape.x2 = dnd.posFin_x;
            this.currentShape.y2 = dnd.posFin_y;
        }
        else{
            this.currentShape.x = dnd.posFin_x - dnd.posInit_x;
            this.currentShape.y = dnd.posFin_y - dnd.posInit_y;
        }
        this.dessin.paint(this.ctx, this.canvas);
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
       this.updateCurrentShape(dnd);

       this.currentShape

    }
    
}


