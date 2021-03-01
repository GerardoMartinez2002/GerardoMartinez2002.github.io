var listaPrecio = [];
var listaCantidad = [];
var listaTotal = [];
var cantdadProductos = [];
var granTotal = 0;

function redondeo(n,d){
    return Number(Math.round(n + 'e' + d) + 'e-' + d);
}

function esValorValido(w){
    if(isNaN(w) || w == ""){
        return false;
    }
    else{
        return true;
    }

}

function agregar(p,c,t){
    listaPrecio.push(p);
    listaCantidad.push(c);
    listaTotal.push(t);
}

function calcula(){
    var precio = parseFloat(document.getElementById("precio").value);
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    precio = redondeo(precio,2);
    cantidad = redondeo(cantidad,2);
    var total = redondeo(precio * cantidad,2);
    agregar(precio,cantidad,total);
    creaTabla();
}

function creaTabla(){
    var tabla = "";
    for(var x = 0;x<listaCantidad.length;x++){
        tabla +="<p>" + listaCantidad[x] + "-" + listaPrecio[x] + "-" + listaTotal[x] + "</p>";
    }
    document.getElementById("tabla").innerHTML = tabla;
}

//var w = 3.78979;
//var x = 3.8e2;
//console.log(x);
//console.log(redondeo(w,2));
