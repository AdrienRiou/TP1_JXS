
const editingMode = { rect: 0, line: 1 };

class Pencil {
<<<<<<< HEAD
	constructor(ctx, dessin, canvas) {
        this.dessin = dessin;
=======
	constructor(ctx, drawing, canvas) {
>>>>>>> e4f2d0fc4325ef771f343e21bb672a5b01bac1b3
        this.currEditingMode = editingMode.line;
        this.currLineWidth = 5;
        this.currColour = '#FFFFF';
        this.currentShape = 0;
<<<<<<< HEAD
        this.ctx = ctx;
        this.canvas = canvas;
=======
        this.dessin = drawing;
        this.ctx = ctx
>>>>>>> e4f2d0fc4325ef771f343e21bb672a5b01bac1b3
        new DnD(canvas, this);

        // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    }


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

<<<<<<< HEAD
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
        if(this.currEditingMode == editingMode.line) {
            this.dessin.tabForm[this.dessin.tabForm.length-1].x2 = dnd.posFin_x;
            this.dessin.tabForm[this.dessin.tabForm.length-1].y2 = dnd.posFin_y;
        }
        else{
            this.dessin.tabForm[this.dessin.tabForm.length-1].longueur = dnd.posFin_x - dnd.posInit_x;
            this.dessin.tabForm[this.dessin.tabForm.length-1].hauteur = dnd.posFin_y - dnd.posInit_y;

        }

        this.dessin.paint(ctx, canvas);
        //this.updateCurrentShape(dnd);

        //this.currentShape

    }
    
=======

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
>>>>>>> e4f2d0fc4325ef771f343e21bb672a5b01bac1b3
}


