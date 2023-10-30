//Generar un numero entre 1-100 i endevinar-lo. Cada intent es dirà {major o menor} segons el intent sigui +gran o +petit.
//Si introdueix un valor invàlid es mostrarà 'invalid' i es comptarà l'intent.
//Si inytodueix un 0-> "Game over"
//Resultat-> "L'has endevinat en x intents"
function endevina()  {
    //random integer from 1 to 100
    let x = Math.floor(Math.random()*10)+1;
    let counter = 0;
    let num = -1;
    let pista = "";
    console.log("Numero a endevinar: "+x);
    while (num!== 0) {
        num = prompt("Adivina entre 1-100 "+pista);
        counter++;
        if (isNaN(num)) {
            alert("Invàlid! Not a number");
        } else {
            if (num == x) {
                alert("Correcte! L'has endevinat en "+counter+" intents");
                break;
            }
            if (num == 0) {
                alert("Game over");
                break;
            }
            if (num > x ) {
                pista = "Pista: és més petit que "+num;
            }
            if (num < x) {
                pista = "Pista: és més gran que "+num;
            }
        }
        
    }
}

//Demanar 2 num de { 2000 a 2050 } dir quin és el 1r any del rang que comença en dimecres (dimecres 1 de gener)
function dimecres() {
    let one = prompt("Primer any:");
    let two = prompt("Segon any:");

    let date = new Date(one,0,1); //any,gener, dia 1
    
    for (let i=one; i<=two; i++) {
        date.setFullYear(i);
          console.log(date);
          if(date.getDay()==3) { //getDay() devuelve 0 domingo y lunes 1 hasta sabado 6
            alert("El primer año del rango que empieze el año en miercoles 1 de enero es: "+date.getFullYear());
            break;
          }
          if (i==two && date.getDay()!=3) {
            alert("El rango proporcionado no tiene ningun miercoles 1 de enero");
          }
    }
}

//Demanar una paraula i dir si és pentavocàlica (té les 5 vocals)
function pentavocalica() {
    let vocals = [/[aàáä]/gi,/[eèéë]/gi,/[iìíï]/gi,/[oòóö]/gi,/[uùúü]/gi];
    let txt = prompt("La teva paraula es pentavocàlica?");

    for (let i=0;i<vocals.length; i++) {
        console.log(vocals[i]);
                if (!txt.match(vocals[i])) {
                    console.log(vocals[i]);
                    console.log("falla");
                }
              
          }
}