//Demanar 2 numeros i mostrar quin es el mes proxim al 100
function proximAlCent() {
    let x = parseInt(prompt("Primer numero"));
    let y = parseInt(prompt("Segon numero"));

    let tmpX = 100 - x;
    let tmpY = 100 - y;

    if (x > 100) {
        tmpX = x - 100;
    }
    if (y > 100) {
        tmpY = y - 100;
    }

    if (tmpX < tmpY) {
        console.log(x+" es més prop del 100 que " + y);
        alert(x+" es més prop del 100 que " + y);
    } else if (tmpX > tmpY) {
        console.log(y+" es més prop del 100 que " + x);
        alert(y+" es més prop del 100 que " + x);
    } else {
        console.log("Els dos están igual de prop");
        alert("Els dos están igual de prop");
    }
}

//Demanar 3 numeros (hora, minut, segon) i mostrar la data (hora) un segon més tard
function unSegonMes() {
    const hora = new Date();
    let h = parseInt(prompt("Hora:"));
    let min = parseInt(prompt("Minuts:"));
    let sec = parseInt(prompt("Segons:"));
    
    hora.setHours(h);
    hora.setMinutes(min);
    hora.setSeconds(sec);

    console.log(hora);

    hora.setSeconds(hora.getSeconds()+1);
    console.log("Hora: " + hora.getHours() +":" +hora.getMinutes()+ ":"+ hora.getSeconds());
    alert("Hora: " + hora.getHours() +":" +hora.getMinutes()+ ":"+ hora.getSeconds());
}

//Demanar 3 numeros (any, mes i dia) i dir si es una data vàlida
function esDataValida() {
    const fecha = new Date();
    let y = parseInt(prompt("Any: YYYY"));
    let m = parseInt(prompt("Mes: MM"));
    let d = parseInt(prompt("Dia: DD"));

    fecha.setFullYear(y);
    fecha.setMonth(m-1);
    fecha.setDate(d);
    if ((fecha.getFullYear() == y) && (fecha.getMonth()+1 == m) && (fecha.getDate() == d)) {
        console.log("Data vàlida: "+ fecha.getFullYear(y)+":"+ (fecha.getMonth(m)+1)+":"+fecha.getDate(d));
        alert("Data vàlida: "+ fecha.getFullYear(y)+":"+ (fecha.getMonth(m)+1)+":"+fecha.getDate(d));
    } else {
        alert("Invalid number!");
        console.log("Invalid number!");
    }
}
//Demanar un numero de dies i convertir a (any, mes, dia), tots els mesos son de 30 dies
function conversion() {
    let x = parseInt(prompt("Numero de dies"));

    let y = Math.floor(x/360);
    console.log(y+"any");
    let tmp1 = y * 360;
    let tmp2 = x-tmp1;
    let mes = Math.floor(tmp2/30);
    console.log(mes+"mes");
    tmp1 = mes * 30;
    let dies = tmp2 - tmp1;
    console.log(dies+"dies");
    
    alert(y+"any " + mes+"mes "+ dies+"dies");
    
}