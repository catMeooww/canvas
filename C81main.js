canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
color = "black";

//iniciar ou reiniciar o caminho para o desenho
ctx.beginPath();
//ajustar cor de objeto
ctx.strokeStyle = color;
//ajustar tamanho de linha
ctx.lineWidth = 2;
//desenhando
ctx.arc(200,200,40,0,2*Math.PI);
//sinalizando clique do mouse
canvas.addEventListener("mousedown",mouseDown);
function mouseDown(e){
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    console.log("X = " + mouseX + " ,Y = " + mouseY);
    circle(mouseX,mouseY);
}
function circle(mouseX,mouseY){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
    ctx.stroke();
}
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.hight);
    console.log("clear");
}