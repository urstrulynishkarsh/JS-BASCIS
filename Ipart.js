console.log("namastey bharat")

// let variable local variables
let number=9936051613;
let name="nishkarsh";
// let number=9936051613;
let love=true;
let a;
let time=null;
let user=undefined;
console.log(number,name,time,user,love,a);
console.log(typeof(number),typeof(a),typeof(name),typeof(time),typeof(user))

// var variable global variable

var hello="ji";
var hello="nishkarsh";
console.log(hello)

// const variable


const number1=123;
console.log(number1)



// dynamic typing

verma="ricky"
console.log(verma)
console.log(typeof(verma))




// reference type object,arrays,functions

// truthy or falsy value types

console.log(Boolean(0))
console.log(Boolean(1))
console.log(Number(0))
console.log(false || true);
console.log(false || false);
console.log(false ||5||0);
console.log(true&&false)
console.log(false&&5)



let money=NaN;
if(money)
{
    console.log("money is not zero:")
}
else{
    console.log("money is zero:");
}


// loops


let c=100;
for(let i=c;i>0;i--){
    console.log(i);
}

while(c>0){
    console.log(c);
    c--;
}

do{
    console.log(c);
    c--;
}while(c<100);