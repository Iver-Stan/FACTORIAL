let a=prompt("ingrese n")
let r = Math.sqrt(2 * Math.PI * a) - ((a) / Math.E) ** a;

document.write("<br> EL RESULTADO ES: "+r)
 
/*
Verificación de MATLAB: 
factorial_de_20 = factorial(20);
disp(factorial_de_20); % Muestra el resultado en la consola
CONSOLA: 	2432902008176640000
*/



let s=(2432902008176640000-r)/2432902008176640000
document.write("<br>El error es : "+s)

