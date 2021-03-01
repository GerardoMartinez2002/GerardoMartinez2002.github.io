//muestra mensaje de alerta
alert("hola");
//escribir hola en la pagina desde el javascript
document.body.innerHTML = "<h1> Hola </h1>"; 
//Mensaje en la consola (Son privados para el programador practimacamente y no se ven em la pagina)
console.log("Hola consola");
//es una variable y prompmt es el comando que nos permite abrir la ventana
//var x = prompt("Dame un numero");
//Todas las variables estan es string y hay que parsearlas en int
//var w = parseInt(x) + 7;
//document.body.innerHTML = w;


function boton(){
    if(isNaN(document.getElementById("num1").value) || document.getElementById("num1").value==""){
        alert("Debe introducir numeros");
    }
    else if(isNaN(document.getElementById("num2").value) || document.getElementById("num2").value==""){
        alert("Debe introducir numeros");
    }
    else{
    //alert("boton");
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var suma = n1 + n2;

    //para imprimir en la impresora
    //print(n1)
    //innerHTML es para modificar el html
    document.getElementById("suma").innerHTML = "la suma es " + suma;
    }
}
function multiplicacion(){
    if(isNaN(document.getElementById("num1").value) || document.getElementById("num1").value==""){
        alert("Debe introducir numeros");
    }
    else if(isNaN(document.getElementById("num2").value) || document.getElementById("num2").value==""){
        alert("Debe introducir numeros");
    }
    else{
    //alert("boton");
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var multiplicacion = n1 * n2;
    document.getElementById("suma").innerHTML = "la multiplicacion es: " + multiplicacion;
    }
}
 
function reiniciar(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("suma").innerHTML="";
}