// 1. Tipo entero y decimal
const entero = 42; // Entero
const decimal = 3.14; // Decimal
console.log(typeof entero, typeof decimal);


// 2. Notación científica
const notacionCientifica = 5e3; 

// 3. Infinito y NaN
const Infinito = Infinity;
const noEsUnNumero = NaN; // Not a Number


// 4. Operaciones con números
const suma = 3+4
const resta = 10-5;
const multiplicacion = 2*3;
const division = 10/2;

// Modulo y Exponenciación 
const modulo = 10 % 3; // Resto de la división
const exponenciacion = 2 ** 3; // 2 elevado a la 3

// Precisión de operaciones
const resultado = 0.1 + 0.2; // Resultado no es exactamente 0.3
console.log(resultado); // Muestra 0.30000000000000004
console.log(resultado.toFixed(1)); // Muestra 0.30 con dos decimales
console.log(resultado === 0.3); // false, porque 0.1 + 0.2 no es exactamente 0.3

