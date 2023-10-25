/*
//funkce jdou zavolat nekonečněkrát
//starší způsob
// v () - argument zkratka arg/args
function doSomething(){
    console.log("something");
}

//novější způsob - arrow funkce
const dooSomething = () =>{
    console.log("someting");
}

doSomething();
dooSomething();
*/

//-----------------------------------------//

//item - parametr
//item1, item2 -parametry
/*
const kulin = (item) =>{
    console.log("přinesl jsem " + item);
}
function kulinn (item1, item2) {
    console.log("přinesl jsem " + item1 + " a " + item2 );
}

kulin("bryle");
kulin("pocitac");
kulinn("michalovo bačkory", "myš");
kulinn("jídlo", "pití");
*/

/*
function sum(a, b, c){
    console.log(a+b+c);
}
sum(5, 4, 7);


const sub = (a, b) =>{
    console.log(a-b);
}
sub(7,8);


function div(wewqewq, eqewqwqe){
    console.log(wewqewq/ eqewqwqe);
}
div(2,1);


const mul = (numberOne, numberTwo) =>{
    console.log(numberOne*numberTwo)
}
mul(4,1);

function hello(ahoj){
    console.log("hello" + ahoj);
}
ahoj("pavel");


function sum(a, b, c, d ,e ,f){
    console.log(a + b + c + d + e + f)
}
sum(1,2,3,4,5,6);

const greetings = (name1, name2, name3, name4) =>{
    console.log("hello "+ name1 + ", hello "+ name2 + ", hello "+ name3 + ", hello "+ name4);
}
greetings("Pavle", "Radku", "Honzo", "Pepo");

const greetings2 = (name1, name2, name3, name4) =>{
    console.log(`hello ${name1}, hello ${name2}, + hello ${name3}, hello ${name4}`);
}
greetings("Pavle", "Radku", "Honzo", "Pepo");
*/


//` - tlačítko pod escapem v ang. klávesnici
//$ - shift + 4
//{} - shift + tlacitko na pravo do P
//() - shift + 9 nad pismenem O
//; napravo od L
// = - vedle backspacu




/*
//funkce lze opakovat

let firstNumber = 5;
let secondNumber = 6;
let thirdNumber = 4;


const sum = (a,b) => a+b; //jen u arrow funkce lze zkrátit return a+b;
let result = sum (firstNumber, secondNumber);
console.log(result);


function sumA(a,b){
    return a+b;
}
let resultA = sumA (firstNumber, secondNumber);
console.log(resultA);
let reusltB = sumA(result, thirdNumber);
console.log(result,thirdNumber)



let person = "Radek";
let age = "43";
function getSentence(a,b) {
    return`Tvoje jméno je ${a} a je ti ${b} let`
}

const createSentence = (a,b) => `Tvoje jméno je ${a} a je ti ${b} let`;

console.log(createSentence(person, age))
*/


