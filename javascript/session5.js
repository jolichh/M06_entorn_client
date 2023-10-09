
/* convierte fahrenheit a celcius y viceversa*/
function converteixTemperatura() {
    let x = prompt("Escriu 'f' si introduiràs FAHRENHEIT i 'c' per CELCIUS");        
    let temperatura = parseInt(prompt("Introdueix la temperatura: "));
    let resultado;

    if (x === 'f' ) {
        resultado = (temperatura-32)/(9/5);
        console.log(temperatura+" fahrenheit equival a "+resultado+" celcius");
        alert(temperatura+" fahrenheit equival a "+resultado+" celcius");
    } else if (x === 'c') {
        resultado = (9/5)*temperatura+32;
        console.log(temperatura+" celcius equival a "+resultado+" fahrenheit");
        alert(temperatura+" celcius equival a "+resultado+" fahrenheit");
    } else {
        console.log("Algo ha ido mal");
    }
}

/* Demanar un número a l'usuari, i convertir-lo a [binari, octal, hexadecimal] utilitzant bucles, divisions i residus */
function convertirNumeros() {
    let num = prompt("Escriu un número:");
    let n2 = passaABinari(num); //división hasta 0
    let n8 = passaAOctal(num);
    let n16 = passaAHexa(num);
}
function passaABinari(num) {
    let tmp;
    let residu;
    let resultado = "";
    //binari
    while (num!==0) {     
        residu = Math.floor((num%2)); //obtenemos el residuo de la división
        tmp = Math.floor(num/2);    //tmp guarda temporalmente el resultado de la división que pertenece a num      
        num = tmp;     
        resultado = residu + resultado;        
    }
    console.log(resultado);
}
function passaAOctal(num) {
    let tmp;
    let residu;
    let resultado = "";

    while (num!==0) {     
        residu = Math.floor((num%8)); //obtenemos el residuo de la división
        tmp = Math.floor(num/8);    //tmp guarda temporalmente el resultado de la división que pertenece a num      
        num = tmp;     
        resultado = residu + resultado;        
    }
    console.log(resultado);
}
function passaAHexa(num) {
    let hexa = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let tmp;
    let residu;
    let resultado = "";
    let posicionHexa = 0;
    for (let i=0;i<num;i++) {
        posicion = posicion+i;
    }
    console.log(hexa);
}