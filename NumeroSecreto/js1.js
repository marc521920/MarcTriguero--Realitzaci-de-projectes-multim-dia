

let nuemero = 0;
let numeroej2= 0;
let numeroej3 = 0;
let numerorandom = Math.floor(Math.random() * 100);
    let intentos = 0;



function ej1() {
for (let i = 0; i < 10; i++) {
    nuemero = nuemero + 1;
    console.log (nuemero);
}
}
function ej2() {
    numeroej2 = prompt ("Dame un numero");
    let suma = 0;
for (let i = 0; i < numeroej2; i++) {
   
    suma = suma + (i+ 1);
  
}
 console.log (suma);
}
function ej3() {
    let numeroej3 = prompt ("Dame un numero");
    for (let i = 0; i < numeroej3; i++) {
        if (i % 2 == 0) {
            console.log (i);
        }
    }
}
function ej4() {
    let asterisco = "";
    let numeroej4 = prompt ("Dame un numero");
    let asteriscosave;
    primeravuelta = true;
   for (let i = 0; i <= numeroej4 ; i++) {
    if (primeravuelta) {

    asterisco = asterisco + "*";
    asteriscosave = asterisco;
    primeravuelta = false;
    }
    else {
    asteriscosave = asteriscosave + "**";
    asterisco = asteriscosave;
    }
    for (let j = 0; j < (numeroej4)-i; j++) {
        asterisco = " " + asterisco + " ";
    }
    

    console.log (asterisco);
}   
}
function ej5() {
    let numeroej5Arriba = prompt ("Dame un numero por arriba");
    let numeroej5Abajo = prompt ("Dame un numero por abajo");
    let esPrimo = [2];
    let primo = true;
    
    numeroej5Abajo = parseInt(numeroej5Abajo);
    numeroej5Arriba = parseInt(numeroej5Arriba);
    numeroej5Abajo = Math.floor( numeroej5Abajo);
    console.log (numeroej5Abajo);
    if (numeroej5Abajo > 0 && numeroej5Arriba > numeroej5Abajo) {
    for (let i = 1; i <= numeroej5Arriba; i++) {
        primo = true;
        esPrimo.forEach(element => {
            if (element > Math.sqrt(i)) {
                 if (i % element === 0) {
                primo = false;
            }
            }
           
            
            
        });
        if (primo === true && i != 1) {
        esPrimo.push(i);
        if (i >= numeroej5Abajo) {
        console.log (i);
        }
    }

            
        
    }
    
    
    }
    else {
        alert ("Los numeros introducidos no son validos");
    }
}
function random() {
    numerorandom = Math.floor(Math.random() * 100);
    intentos = 0; 
    document.getElementById("adivinado").innerHTML = "Dime un numero del 1 al 100";
}
function ej6() {
    intentos = intentos + 1;
    let numeroej6 = document.getElementById("numero").value;
    numeroej6 = parseInt(numeroej6);
    console.log (numerorandom);
    console.log (numeroej6);
    if (numeroej6 != numerorandom) {
        if (numeroej6 < numerorandom && numeroej6 > 0) {
                document.getElementById("adivinado").innerHTML = "El numero es mayor";
        }
        else if (numeroej6 > numerorandom && numeroej6 <= 100) {
            
                document.getElementById("adivinado").innerHTML = "El numero es menor ";
        }
        else if (isNaN(numeroej6)) {
            document.getElementById("adivinado").innerHTML = "Introduce un numero valido";
        }
        else if ( numeroej6 <= 0 || numeroej6 > 100) {document.getElementById("adivinado").innerHTML = "del 1 al 100 por favor";}
        numeroej6 = parseInt(numeroej6);}
    else {document.getElementById("adivinado").innerHTML = "Has adivinado el numero! pero en " + intentos + " intentos";}
}
ej6();
