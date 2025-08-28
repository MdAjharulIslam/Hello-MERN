// hoisting

let a= 10;

console.log(a)

//function hoisting



function greet(){
    console.log("hello hoisting")
}

greet();

const greet1 = function(){
    console.log("hello")
}
greet1();


//  null declaration

let y = null;
console.log(y)