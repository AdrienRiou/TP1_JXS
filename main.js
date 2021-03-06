
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


canvas.width=800;
canvas.height=600;

/*
// Code temporaire pour tester le DnD
new DnD(canvas, interactor);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(10, 20, 50, 100, 5, '#FFFFFF');
rec.paint(ctx);
var line = new Line(10, 20, 50, 100, 5, '#00CCC0');
line.paint(ctx);
// tester également Dessin.
////
*/

// Code final à utiliser pour manipuler Pencil.
var dessin = new Dessin();
var pencil = new Pencil(ctx, dessin, canvas);
dessin.paint(ctx, canvas);

