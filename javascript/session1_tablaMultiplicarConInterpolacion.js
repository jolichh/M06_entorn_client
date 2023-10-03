function multiplica() {
    let x = prompt("Introdueix un numero del 0 al 10");
    while(true) {
        if ((x>0 && x<=10)) {
            console.log(`Taula del ${x}`);
            for (var i = 1; i <= 10; i++) {
                console.log(`${x} x ${i} = ${x*i}`);
            }
            break; 
        }
        x = prompt("Ha de ser un numero entre 0 i 10");
    }
}
function fibonacci(numero) {
    let x = numero    
    
    let c = 1;
    let a = 0;
    let b = a;
    for (var i =1; i<=x; i++) { 
        a = c;
        console.log(`fibo[${i}] = ${c}`);        
        c = a + b;
        
        b = a;
    }
}