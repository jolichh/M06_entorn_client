//Demanar el numero de [files, columnes] i crear una taula dinàmica html de la forma. Mostra numFila.numCol
function taulaDinamica() {

    let files = parseInt(prompt("Quantes files vols?"));
    let columnes = parseInt(prompt("Quantes columnes vols?"));

    let t = document.createElement("table");
    

    //recorrido filas
    for (let i=1; i<=files;i++) {
        let tr = document.createElement("tr");

        //recorrido de la columna
        for (let j=1; j<=columnes;j++) {
            let td = document.createElement("td");
            let txt = document.createTextNode(i+"."+j);
            td.style.border = "1px solid black";
            tr.appendChild(td);
            td.appendChild(txt);
        }
        t.appendChild(tr);

    }

    document.body.appendChild(t);
}

//Crea una taula dinàmica demanant [files, columnes] de tabla de multiplicar incrementa desde la esquina ( 1, 2, 2, 3, 3, 3, 4, 4,4,4 ...)
function taulaDinamica2() {
    let files = parseInt(prompt("Quantes files vols?"));
    let columnes = parseInt(prompt("Quantes columnes vols?"));

    let t = document.createElement("table");
    

    //recorrido filas
    for (let i=1; i<=files;i++) {
        let tr = document.createElement("tr");

        //recorrido de la columna
        for (let j=1; j<=columnes;j++) {
            let td = document.createElement("td");
            let txt = document.createTextNode(i*j);
            td.style.border = "1px solid black";
            td.style.width ="20px";
            td.style.height = "20px";
            tr.appendChild(td);
            td.appendChild(txt);
        }
        t.appendChild(tr);

    }

    document.body.appendChild(t);
}

//Demanar el numero de columna de la taula(=numero de cel·les de color a la darrera fila) i pinteu una piramide la zona buida blanca(fons) i la piramide de color
function piramide() {
    
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
            td.style.border = "1px solid black";
            td.style.width ="20px";
            td.style.height = "20px";
            td.style.background = "white";
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
            td.style.border = "1px solid black";
            td.style.width ="20px";
            td.style.height = "20px";
            td.style.background = "white";
            tr.appendChild(td);
        }
        t.appendChild(tr);

        rojos = rojos +2; //rojos incrementa a cada iteracion +2
        blancos = columnes -rojos;  //los blancos se van reemplazando por los rojos

    }

    document.body.appendChild(t);
}