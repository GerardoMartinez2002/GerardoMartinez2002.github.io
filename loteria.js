var cartas = [];
function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function cargarArreglo(){
    console.log("Hola");
    for(var i = 2 ; i = 54; i++){
        cartas.push("loteria_" + i + ".jpg");
    }
}

function sacar(){
    var t = cartas.length;
    var p = aleatorio(0,t-1);
    if (t==0)
    {
        alert("se acabo el juego. Voy a reiniciar...");
        cartas = [];
        cargaarreglos();
        document.getElementById("carta").src = "loteria_1.jpg";
    }
    else
    {
        document.getElementById("carta").src = cartas[p];
        cartas.splice(p,1);
    }
}


//var w = aleatorio(1,1000);
//console.log(w);