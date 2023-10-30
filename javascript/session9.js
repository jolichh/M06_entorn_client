//Demana 2 frases a l'usuari i comprova si tenen la mateixa longitud
function longitud() {
    let txt1 = prompt("Escriu una frase");
    let txt2 = prompt("Escriu un altre frase");

    if (txt1.length == txt2.length) {
        alert("Tenen la mateixa longitud");
    } else {
        alert("No tenen la mateixa longitud");
    }
}

//Demanar { un text, una lletra } i dir si la lletra està continguda entre 2 i 4 vegades en el text
function conteLletra() {
    let txt = prompt("Escriu un text");
    let lletra = prompt("Dona'm una lletra");

    txt = txt.toLowerCase();
    lletra = lletra.toLowerCase();

    let contador = 0;

    for (let i=0; i<txt.length; i++) {
        if (txt.charAt(i) === lletra) {
            contador++;
        }
    }
    if (contador>=2 && contador<=4) {
        //uso alert porque no me funciona la consola del navegador
        alert("La lletra introduïda està entre 2 i 4 vegades al text");
    } else {
        alert("No està entre 2 i 4 vegades");
    }
}

//Demanar un { text, numero } i mostrar el text sense el caràcter en la posició del numero
function treuLletra() {
    let txt = prompt("Escriu un text");
    let num = prompt("Dona'm un número");
    let respuesta = "";
    for (let i=0; i<txt.length;i++) {
      if (i!==num-1) {
      respuesta = respuesta+txt.charAt(i);
      }
    }  
    document.write(respuesta);
}

//Demanar un text  l'usuari i mostrar:
// 1) Majúscules: {{El text majúscules}}
// 2) minúsucles: {{El text minúscules}}
// 3) Longitud: {{ ... }}
// 4) Nombre de paraules: {{...}}
// 5) Les vocals són: {{...}} (aàáäeèéëiìíioòóöuùúü)
// 6) El numero de vocals és: {{...}}
// 7) El text reduïnt: {{Un text, n text,  text, text, ext, xt, t}} 
function analitzaText() {
    let txt = prompt("Escriu un text");

    //tot en majuscules
    document.write("Majúscules: "+txt.toUpperCase()+"<br>");
    //tot en minuscules
    document.write("Minúscules: "+txt.toLowerCase()+"<br>");
    //longitud del text
    document.write("Longitud del text: "+txt.length+"<br>");
    //Nombre de paraules
    let palabras = 0;    
    let tmp = txt.split(" ");
    for (let i=0; i<tmp.length; i++) {
        if (tmp[i]!== "") {
            palabras++;
        }
    }
    document.write("Nombre de paraules: "+palabras+"<br>");

    //Els vocals que coincideixen (no gestionan repetidas)
    let vocals = /[aàáäeèéëiìíioòóöuùúü]/gi;
    document.write("Les vocals són: "+txt.match(vocals)+"<br>");
    //Numero de vocals (no gestionan repetidas)
    document.write("El número de vocals és: "+txt.match(vocals).length+"<br>");
    //El text reduïnt
    document.write("El text reduïnt: <br>");
    for (let i=0; i<txt.length;i++) {
        document.write(txt.slice(i,txt.length)+"<br>");
    }


}

//Demanar una hora a l'usuari en format hh:mm
//És el dia de cap d'any i volem saber quants minuts queden per a mitjanit 00:00
//Si introdueix 00:00 -> "Any nou"
//Si fica: 23:45->15 , 21:30->150 , 00:01->1439
function compteEnrere() {
    let x = prompt("Introdueix una hora en format HH:MM");
    //separa en array
    x = x.split(":"); 
    //convertimos horas a minutos y le sumamos los minutos que ya teniamos
    let mins = (Number(x[0])*60) + Number(x[1]);
    //sacamos la diferencia para las 00:00, 1440 son los minutos de un dia entero
    let falta = 1440 - mins;
    if (falta !== 0) {
        alert("Faltan " + falta + " minuts");
    } else {
        alert("Any nou!");
    }
}