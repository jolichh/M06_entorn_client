//Una telefònica cobra 10centims per despenjar +5cts/minut de trucada. Demana {hh, mm, ss} i calcula el cost de la trucada
function preuTrucada() {
    let hour = parseInt(prompt("Hores de trucada:"));
    let min = parseInt(prompt("Minuts de la trucada:"));
    let sec = parseInt(prompt("Segons de la trucada:"));
    let total;

    //calcula precio de horas
    let horasAMinutos = hour * 60;
    //sumar todo a minutos
    min = min + horasAMinutos;
    //precio de minutos
    let precioMinutos = min *0.05;
    //precio de segundos
    let precioSegundos = sec*0.0008333;
    
    total = precioMinutos + precioSegundos;


    alert("Cost total: "+ total+ "€")
    console.log("Cost total: "+ total+ "€");
}

//Donat un color al l'usuari {rgb} (0-255), passar-lo a hexadecimal [#FF0A01]. Utilitzar les llibreries de javascript
function colorHexadecimal() {
    let r = parseInt(prompt("Introdueix codi RED: [rgb (0-255)]"));
    let g = parseInt(prompt("Introdueix codi GREEN: [rgb (0-255)]"));
    let b = parseInt(prompt("Introdueix codi BLUE: [rgb (0-255)]"));

    let rr = r.toString(16);
    if (rr.length === 1) {
        rr = "0"+r;
    }
    let gg = g.toString(16);
    if (gg.length === 1) {
        gg = "0"+gg;
    }

    let bb = b.toString(16);
    if (bb.length === 1) {
        bb = "0"+bb;
    }
    let hexa = rr + gg + bb;

    alert("(" + r + "," + g + "," + b + ") = #" + hexa);
    console.log("(" + r + "," + g + "," + b + ") = #" + hexa);
}

//Demanar 2 numeros {preu, diners lliurats} i mostrar el canvi que es donarà. Sempre amb el menor numero de bitllets i monedes
function canvis() { //fallan algunos decimales
    let preu = prompt("Preu?");
    let diners = prompt("Diners lliurat:");
    let total = 0;
    let aDevolver = (diners - preu).toFixed(2);

    const arrayCanvisDisponibles = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

    console.log("-----------------------");
    console.log("preu: "+preu+"€ calers: "+diners+"€");

    let i = 0;
    let billetes; //cuantos billetes de cada tipo;
    let tmp;    //dineros devueltos a cada ronda
console.log(aDevolver);

    while (arrayCanvisDisponibles[i]>aDevolver) {
        i++;
    }
    //calcular de mayor a menor cambio
    if (aDevolver!==0) {
        while (aDevolver>0) {
            if (aDevolver>=1) {
                billetes = Math.floor(aDevolver/arrayCanvisDisponibles[i]);
            } else {
                billetes = aDevolver-arrayCanvisDisponibles[i];
            }
            tmp = billetes*arrayCanvisDisponibles[i];
            console.log(billetes + " de " + arrayCanvisDisponibles[i].toString());
            aDevolver = aDevolver - tmp;
            total = total + tmp;
            i++;
            billetes = 0;
        }
    } else {
        total = 0;
    }
    console.log("Total canvi: " + total + "€");
}