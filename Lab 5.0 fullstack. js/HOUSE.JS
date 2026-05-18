let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


//sol
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.arc(300,90,45,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//chão
ctx.lineWidth = 2;
ctx.fillStyle = 'silver';
ctx.strokeStyle = 'silver';
ctx.fillRect(0,270,500,150);
ctx.strokeRect(0,270,500,150);
ctx.closePath();

//parte azul arco 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.arc(0,270,55,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//retangulo azul 1
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(0,270,55,150);
ctx.strokeRect(0,270,55,150);
ctx.closePath();

//parte azul arco 2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.arc(160,400,60,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//retangulo azul 2
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(0,340,160,60);
ctx.strokeRect(0,340,160,60);
ctx.closePath();

//arvore 1
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.strokeStyle = 'brown';
ctx.fillRect(57,210,20,60);
ctx.strokeRect(57,210,20,60);
ctx.closePath();

//arco
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(67,200,30,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


//arvore 2
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.strokeStyle = 'brown';
ctx.fillRect(345,270,20,60);
ctx.strokeRect(345,270,20,60);
ctx.closePath();

//arco
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(355,255,30,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//casa
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.strokeStyle = 'brown';
ctx.fillRect(150,180,90,90);
ctx.strokeRect(150,180,90,90);
ctx.closePath();

//teto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'salmon';
ctx.strokeStyle = 'salmon';
ctx.moveTo(150,180);
ctx.lineTo(195,140);
ctx.lineTo(240,180);
ctx.fill();
ctx.stroke();
ctx.closePath();

//porta
ctx.lineWidth = 2;
ctx.fillStyle = '#5A2D0C';
ctx.strokeStyle = '#5A2D0C';
ctx.fillRect(185,220,20,50);
ctx.strokeRect(185,220,20,50);
ctx.closePath();

//janela 1
ctx.lineWidth = 2;
ctx.fillStyle = '#35faf0ff';
ctx.fillRect(163,200,20,20);
ctx.closePath();

//janela 2
ctx.lineWidth = 2;
ctx.fillStyle = '#35faf0ff';
ctx.fillRect(206,200,20,20);
ctx.closePath();