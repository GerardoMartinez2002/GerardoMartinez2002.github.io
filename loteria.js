var cartas = [];
var contador = 0;
function AleatorioInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function cargarArreglo()
{
    for(var x = 2;x<=54;x++)
    {
        cartas.push("loteria_"+x+".jpg");
    }
}

function sacar()
{
 var t = cartas.length;
 var p = AleatorioInteger(0,t-1);
 
    if (t ==0)
    {
        alert("fin del juego");
        cartas = [];
        cargarArreglo()
        document.getElementById("carta").src ="loteria_1.jpg";
    }
    else
    {

    document.getElementById("carta").src = cartas[p];
    contador++;
   cartas.splice(p,1)
   console.log("tam=" +t);
}
}