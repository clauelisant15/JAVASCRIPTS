// Explicit Type Casting in JavaScript

const string = '42'; // String representation of a number
const int = parseInt(String); // Convert to integer
console.log(typeof integer); // "number"



const stringDecimal = '3.14'; // String representation of a decimal
const float = parseFloat(stringDecimal); // Convert to float
console.log(float); // "number"
console.log(typeof float); // "number"

const binaryString = '1010'; // Binary string
const decimalFromBinary = parseInt(binaryString, 2); // Convert binary to decimal
console.log(decimalFromBinary); // 10
console.log(typeof decimalFromBinary); // "number"
console.log(typeof float);



//Implicit Type Casting in JavaScript

const sum = '5' + 3; // Implicitly converts number to string
console.log(sum); // "53"


const sumWithBoolean = '5' + true; 
console.log(sumWithBoolean); // "5true"


const sumWithNumber = 5 + true;
console.log(sumWithNumber);

const stringValue = '10';
const numberValue = 5;
const booleanValue = true;
console.log("-----------------")
console.log(stringValue + numberValue); 
console.log(stringValue + booleanValue); 
console.log(stringValue + stringValue); 
console.log(numberValue + booleanValue); 
console.log(numberValue + numberValue);
console.log(numberValue + stringValue ); 
console.log(booleanValue + stringValue);
console.log(booleanValue + numberValue);
console.log(booleanValue + booleanValue);