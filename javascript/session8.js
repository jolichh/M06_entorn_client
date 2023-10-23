//A partir de la piràmide anterior, 
//crear una taula html que dibuixi un romb 
function rombo() {
    
    let columnes = parseInt(prompt("Quantes columnes vols?"));
    let files = Math.floor(columnes/2)+1;   //min de filas que hace posible la forma de piramide
    let t = document.createElement("table");
    
    let rojos = 1;
    let blancos = columnes - rojos;
    //recorrido filas
    for (let i=1; i<=files;i++) {
        let tr = document.createElement("tr");

        //recorrido de la columna
        //parte blanca inicio
        for (let j=1; j<=Math.floor(blancos/2);j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }        
        //parte roja que queda en el centro (piramide)
        for (let j=0; j<rojos;j++) {
          let td = document.createElement("td");
            td.style.border = "1px solid black";
            td.style.width ="20px";
            td.style.height = "20px";
            td.style.background = "red";
            tr.appendChild(td);           
        }
        //parte blanca final, identica a la parte inicial
        for (let j=1; j<=Math.floor(blancos/2);j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }
        
        t.appendChild(tr);
        rojos = rojos +2; //rojos incrementa a cada iteracion +2
        blancos = columnes -rojos;  //los blancos se van reemplazando por los rojos
 
    }    
    //parte abajo
    for (let i=1; i<=files-1;i++) { //filas restantes
        rojos = rojos -2; //resta rojos para decrementar, empieza con -2 porq la linea completa está en el anterior bucle
        let tr = document.createElement("tr");
        //blancos por casilla columna
        for (let j=Math.floor(blancos/2)+2; j>=1;j--) {
            let td = document.createElement("td");
            tr.appendChild(td);
        } 
        //parte rojo
        for (let j=rojos-1; j>1;j--) {
          let td = document.createElement("td");
            td.style.border = "1px solid black";
            td.style.width ="20px";
            td.style.height = "20px";
            td.style.background = "red";
            tr.appendChild(td);           
        }
        //blancos empieza+2 para quilibrar -2 de rojos
        for (let j=Math.floor(blancos/2)+2; j>=1;j--) {
            let td = document.createElement("td");
            tr.appendChild(td);
        } 
        t.appendChild(tr);
        blancos = columnes -rojos;  //los blancos se van reemplazando por los rojos
    }

    //añadir al html
    document.body.appendChild(t);   
}

//Demanar a l'usuari un nom d'arxiu i pintar per consola la seva extensió
function extensio() {
    let nom = prompt("Diguem el nom d'un arxiu");
    let ext = nom.split('.');

    console.log(ext[ext.length-1]);
    console.log(ext.pop()); //esta funcion elimina el último elemento de un array y lo devuelve. Ccambia la longitud del array.
}

//Demanar a l'usuari una frase i mostrar si la frase té el mateix número de lletres 'a' i lletres 'b'
function compta() {
    let txt = prompt("Diguem una frase");
    let countA = 0;
    let countB = 0;
    txt = txt.toLocaleLowerCase();
    for (let i=0; i<txt.length; i++) {  //otra forma de hacerlo es usando la funcion var[index]
        if (txt.charAt(i) === 'a') {
            countA++;
        } 
        if (txt.charAt(i) === 'b') {
            countB++;
        }
    }

    if (countA>countB) {
        console.log("Hi ha més números de lletra 'a'");
    } else if (countA<countB) {
        console.log("Hi ha més números de lletra 'a'");
    } else {
        console.log("Hi ha el mateix numero de 'a' que de 'b'");
    }
}