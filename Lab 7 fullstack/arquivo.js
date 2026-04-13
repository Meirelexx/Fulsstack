let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


var retangulo1 = {
    x: 0,
    y: 10,
    largura: 30,
    altura: 10,
    cor: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

    var retangulo2 = {
    x: 100,
    y: 100,
    largura: 30,
    altura: 20,
    cor: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

let dir = 1
function animacao(){
     ctx.clearRect(0,0,400,400);
    if (retangulo1.x == 350) {
        dir = -1
    }
   if
   (retangulo1.x == 0) {
        dir = 1
    }
   
    retangulo1.x = retangulo1.x + dir;
    retangulo1.desenha();
    retangulo2.desenha();
    requestAnimationFrame(animacao);
}
animacao();


