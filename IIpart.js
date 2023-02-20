// objects in js

const myperson={
    firstname:"nishkarsh",
    lastname:"verma",
    age:20,
    city:"haridwar",
    "college":"GKV",
    draw:function() {
        console.log("hello my world!");
    }

}
for(let key in myperson)
{
    console.log(key, myperson[key]);
}


for(let key of Object.entries(myperson))
{
    console.log(key);
}

console.log(myperson);
console.log(typeof (myperson))
console.log(myperson.firstname);
console.log(myperson['lastname']);
console.log(myperson.draw());




// factory function

function createPRofile(){
    let myIntroduction={
        firstname:"nishkarsh",
    lastname:"verma",
    age:20,
    city:"haridwar",
    "college":"GKV",
    draw:function() {
        console.log("hello my world!");
    }

    }
    return myIntroduction;
}

let profile=new createPRofile();
console.log(profile);




function createRectangle(length,breadth){
    return rectangle={
        length:length, //we can also use length instead  of length=length;
        breadth:breadth,
        draw(){
            console.log("hello my cutie!")
        }
    }
}
let rect1=new createRectangle(5,10);
let rect2=new createRectangle(10,5);
console.log(rect1);
console.log(rect2);



// constructor function there is no return type ans we use this point to current object


function MyPerson(length,breadth){
    this.length=length;
    this.breadth=breadth;
    this.firstname="nishkarsh",
    this.lastname="verma",
    this.age=20,
    this.city="haridwar",
    this.college="GKV",
    this.draw=function() {
        console.log("hello my world!");
    }

}

let Person=new MyPerson(4,5);
console.log(Person);



let personold=new Function('length','breadth',`this.length=length;
this.breadth=breadth;
this.firstname="nishkarsh",
this.lastname="verma",
this.age=20,
this.city="haridwar",
this.college="GKV",
this.draw=function() {
    console.log("hello my world!");
}`)

let personnew=new personold(10,19);
console.log(personnew)



// dynamic nature of object

let friends={
    first:"ritik",
    second:"nitya"
}
console.log(friends);
friends.third="pintu";
console.log(friends);
delete friends.first;
console.log(friends);



// types in js

// primitive or values type
let a=10;
b=a
a++;
console.log(a,b);


// reference type or objects

let c={
    value:10,
    nama:40
}
d=c;
c.value=50
c.nama=60
console.log(c,d)






let num=10;
function incr(num)
{
    num++;
}
incr(num)
console.log(num);




// cloning value one variable to second variable

let source={
    first:"ritik",
    second:"nitya",
    third:"pintu",
    fourth:"nishkarsh"

}
let  destination={};
for(let i in source) {
    destination[i] = source[i];
}
console.log(destination);
console.log(source);

delete source.first;

destination =Object.assign({},source) 
console.log(destination);


source.first="raman";
destination={...source};
console.log(destination);