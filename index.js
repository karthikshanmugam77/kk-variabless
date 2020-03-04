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
console.log(a.concat(b))    // concatenate two strings
                           //output :welcomekarthi
var c = b.endsWith("i");  //checks for word ending with 'i'
console.log(c)           // output : true (boolean)

var d = b.includes('t'); //check if the string includes 't'
console.log(d)          // output : true (boolean)

console.log( b.indexOf('r'))  //Returns the indexOf 'r'
                             // output : 2

console.log(a.lastIndexOf('e'));  //returns the last indexOf 'e'
                                 // output : 6
console.log(a.repeat(2));  // repeats the string with entered values                              //output : welcomewelcome
console.log(a.replace('e','ee'));  // replaces the letter 
                                  //output : weelcome
console.log(b.search('h')); // searchs for the specified word
                           // output : 4
console.log(a.slice(3,7)); // slices the word between the range
                          // output : come
console.log(b.split('t')); // splits the word 
                          //output:["kar", "hi"]
console.log(b.startsWith('k'));  // searchs for the starting word 
                                //output : true;
console.log(a.substr(3))     //create the substring in range
                            //output:come
console.log(a.toUpperCase()); // transforms into upper toUpperCase
                             //output : WELCOME
console.log(b.toLowerCase());  // transforms into toLowerCase
                              //output : karthi
var f =  "    hello   "
console.log(f.trim()); // trims the space in the strings
                      //output : hello
//------------------------------------------------------------------

//                     NUMBER METHODS
var num = 77.334546
console.log(num.toFixed(2)); // Fix the decimal to n places
                            //output :77.33

console.log(num.toExponential(2)); // Fix the value to toExponential
                                 //output :7.73e+1

console.log(num.toString()); // converts the number in to string
                           //output :77.334546
console.log(num.toString(2))//output:1001101.0101010110100100110011101000000100000001111101         
//------------------------------------------------------------------

//                    GLOBAL METHODS

//console.clear(); //clears the console
//console.error('hi'); //displays the error msg
                    // output : hi as error
//console.warn("hello"); //display warning 
                      //output : hello in yellow color
//console.info("normal"); //display normal msg
                        //output : normal
console.table(["Audi", "Volvo", "Ford"]); //creates 
//prompt('enter your name'); //modal box from top of the scrreen prompting to enter name


let c ="10 10 20"  // declaring numbers as string 
let value =Number(c); //passing values 
console.log(value); // output : NaN

let num =43;
console.log(Number(num)); //output : 43

let a = 'hi'; // storing hi into a
console.log(isNaN(a)); // output: true

let b='88' //assign
console.log(isNaN(b)); // output: false

var b = parseFloat("10.00") //parsing and storing
var c = parseFloat("10.33") // parsing and storing
console.log(b); // output : 10
console.log(c); //output : 10.33
