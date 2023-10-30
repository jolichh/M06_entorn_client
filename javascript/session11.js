// Obtenir la data actual del sistema i mostrar: https://www.calendario-365.es/numero-de-semana.html 
// 1- Avui és dd del mes mm de l'any yyyy
// 2- El nombre de setmana actual de l'any: nn
// 3- % de dies transcorreguts de l'any és nn,nn%
// 4- % de dies que que queden en l'any nn,nn%
// 5- Ara són les hh:mm:ss
// 6- % del dia transcorregut nn,nn%
// 7- % de dia que queda nn,nn%
function sistemaData(){
    let sistemaData = new Date();
// 1- Avui és dd del mes mm de l'any yyyy
    document.write("<br>Avui és "+sistemaData.getDate()+" del mes "+(sistemaData.getMonth()+1)+" de l'any "+sistemaData.getFullYear());
// 2- El nombre de setmana actual de l'any: nn
    //primero de enero
    let dataEnero = new Date(sistemaData.getFullYear(), 0, 1); 
    //diferencia en milisegundos de enero-actual
    let diferenciaFechas = sistemaData.getTime() - dataEnero.getTime(); 
    //milisegundos*dia*hora*segundos dividido por dias de la semana
    let numSemana = Math.ceil((diferenciaFechas/(1000*24*60*60)+1)/7);    
    document.write("<br>El nombre de setmana actual de l'any: "+ numSemana);
// 3- % de dies transcorreguts de l'any és nn,nn%
    let dataDiciembre = new Date(sistemaData.getFullYear(), 11, 31);
    //diff milisegundo de enero a actual
    let total = dataDiciembre.getTime()-dataEnero.getTime(); 
    //% de dias transcorregut
    let transcorregut =(diferenciaFechas*100)/total;    
    document.write("<br>% de dies transcorreguts de l'any: "+ transcorregut.toFixed(2)+"%");
// 4- % de dies que que queden en l'any nn,nn%
    document.write("<br>% de dies que que queden en l'any: "+ (100-transcorregut).toFixed(2)+"%");
// 5- Ara són les hh:mm:ss
    document.write("<br>Ara són les "+sistemaData.getHours()+":"+sistemaData.getMinutes()+":"+sistemaData.getSeconds());
// 6- % del dia transcorregut nn,nn%
    let totDia = new Date(sistemaData);
    //justo antes de que termine el dia
    totDia.setHours(23, 59, 59, 999); 
    //milisegundos que llevamos de dia (transcurrido)
    let msDiaTrans = totDia.getTime() - sistemaData.getTime();   
    //% de lo que queda para terminar el dia
    let porcentajeRestante = (msDiaTrans*100)/(1000*24*60*60); 
    document.write("<br>% del dia transcorregut: "+ (100-porcentajeRestante).toFixed(2)+ "%");
// 7- % de dia que queda
    document.write("<br>% de dia que queda: "+porcentajeRestante.toFixed(2)+"%");
}

//Els codis de barres poden ser de { 8->EAN8 , 13->EAN13 } digits. 
//El digit més a la dreta és el de control i es calcula segons una formula:
// 25938562 (el 2 es el numero de control)
//Per calcular: començant per la dreta i sense incloure el digit de control, les posicions { imparells *3, parells *1}
//i es suma: 2*3+5*1+9*3+3*1+8*3+5*1+6*3= 88-> la diferencia fins el proper multiplo de 10 és el digit de control (2)
// ex: 65839522->Correcto, 6589521->Incorrecto
// ex: 5029365779425->Correcto, 5129365779425->Incorrecto
//addleftZeroPadding(code,max); checkdigitCOntrol(codi); 
//Tip: dejar el codigo como string para mantener los zeros de la izquierda
function codiBarres() {
    let codi = prompt("Introdueix el codi de barres:");
    //debe contener 8 o 13 digitos
    if (codi.length==8 || codi.length==13) {
        let acumulador = 0;
        for (let i=0; i<codi.length-1;i++) {
            if (i%2==0) {
                //es par
                acumulador = acumulador + (codi.charAt(i)*3);
            }
            if (i%2!=0) {
                //es impar
                acumulador = acumulador + (codi.charAt(i)*1);
            }
        }
        //redondear al más cercano a multiple de 10 y calcular su diferencia
        let control = (Math.round(acumulador/10)*10)-acumulador;
        if (control == codi.charAt(codi.length-1)) {
            alert("Correcte")
        } else {
            alert("Incorrecte!");
        }
    } else {
        alert("Incorrecte");
    }
}