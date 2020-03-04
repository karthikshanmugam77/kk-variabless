// Import stylesheets
import './style.css';

/*----basic data types

 -primitive -reference

--->primitive types --->  string , number , boolean , symbol
--->reference  ----->  object(+ arrays)
---> special values ---> null , undefined , NaN
*/

let a = 'weLcome'; // assinging string to a variable
let b = 'karThi'; 
console.log(a.length) //returns the length of the string
                     //value = 7
console.log(a.concat(b))  // concatenate two strings
                          //output :welcomekarthi
var c = b.endsWith("i");  //checks for word ending with 'i'
console.log(c)           // output : true (boolean)

var d = b.includes('t');//check if the string includes 't'
console.log(d)          // output : true (boolean)

console.log( b.indexOf('r')) //Returns the indexOf 'r'
                             // output : 2

console.log(a.lastIndexOf('e')); //returns the last indexOf 'e'
                                 // output : 6
console.log(a.repeat(2)); // repeats the string with entered values                           //output : welcomewelcome
console.log(a.replace('e','ee'));// replaces the letter 
                                  //output : weelcome
console.log(b.search('h')); // searchs for the specified word
                           // output : 4
console.log(a.slice(3,7)); // slices the word between the range
                          // output : come
console.log(b.split('t')); // splits the word 
                          //output:["kar", "hi"]
console.log(b.startsWith('k'));  // searchs for the starting word 
                                    //output : true;
console.log(a.substr(3))  //create the substring in range
                            //output:come
console.log(a.toUpperCase());// transforms into upper toUpperCase
                             //output : WELCOME
console.log(b.toLowerCase()); // transforms into toLowerCase
                              //output : karthi
var f =  "    hello   "
console.log(f.trim());// trims the space in the strings
                      //output : hello



