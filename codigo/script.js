var hora = 0;
var minuto = 0;
var segundo = 0;

var temp = 1000 
var cr;

function iniciar (){
    cr = setInterval(() =>{tempo(); }, temp);
}
function tempo(){
    segundo ++;

    if(segundo == 60){
        segundo = 0;
        minuto ++;

        if(minuto == 60){
            minuto = 0;
            hora++;
        }
    }

    var formatacao = (hora < 10 ? "0" + hora : hora) + ":" + (minuto < 10 ? "0" + minuto : minuto) + ":" + (segundo < 10 ? "0" + segundo : segundo);
    document.getElementById("contador").innerText = formatacao; 
}

function pausar(){
    clearInterval(cr);
}

function parar(){
    clearInterval(cr);
    hora = 0;
    minuto = 0;
    segundo = 0;
    document.getElementById("contador").innerText = "00:00:00";
}