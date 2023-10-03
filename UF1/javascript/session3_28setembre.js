//1-con libreria Math de JS
//2-bucle for

//calcula temps usant el Math.pow()
function calculaNumero1() {
    
    let x = prompt("Primer numero: ");
    let y = prompt("Segon numero");
    console.time('inici');
    let resultat = Math.pow(x,y);
    console.timeEnd('inici');
    console.log(resultat);    
    alert("Pow "+resultat);
    
    let tmp = x;
    console.time('final')
    for (let i=1; i<y;i++) {     
        tmp = tmp*x;        
    }    
    console.timeEnd('final');
    console.log(tmp);
    alert("Bucle: "+ resultat);
}

//ordena i calcula la mitjana de 3 numeros
function tresNumeros() {
    let x = parseInt(prompt("Primer numero"));
    let y = parseInt(prompt("Segon numero"));
    let z = parseInt(prompt("Tercer numero"));

    let arreglo = [x,z,y];
    arreglo.sort();

    let media = (x+y+z)/3;
    let grande = Math.max(...arreglo);
    let medio = arreglo[Math.ceil(arreglo.length/2)-1];
    let peque = Math.min(...arreglo);

    console.log("La media de los numeros es: " + media);
    console.log("El numero más grande es: " + grande);
    console.log("El numero del medio es: " + medio);
    console.log("El numero más pequeño es: " + peque);

    alert("La media de los numeros es: " + media);
    alert("El numero más grande es: " + grande);
    alert("El numero del medio es: " + medio);
    alert("El numero más pequeño es: " + peque);
}