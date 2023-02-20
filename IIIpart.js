// Math
console.log(Math.random());
console.log(Math.PI);
console.log(Math.round(1.8));
console.log(Math.round(1.3));
let arr1=[1,2,3,4]
console.log(Math.min(...arr1));
console.log(Math.max(...arr1));
console.log(Math.abs(-2));



// strings


const string1 = "A string primitive";
const string2 = '      Also a string primitive      ';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

console.log(string1, string2, string3, string4)
console.log(typeof string1,typeof string2,typeof string3,typeof string4)

console.log(string4.length)//15
console.log(string4.startsWith("A"))//true
console.log(string4.endsWith("object"))//true
console.log(string4.endsWith("hello world"))//false
console.log(string4.concat(" hello world").concat(" namastey bharat"));
console.log(string4+" hello world "+"namstey bharat");
console.log(string4.indexOf("string"))//-1
console.log(string4.indexOf("String"))//2
console.log(string1.toUpperCase());
console.log(string4.toUpperCase());
console.log(string2.toLowerCase());
console.log(string4.charAt(5))//i
console.log(string4.split(","));
console.log(string4.includes("tring"))
console.log(string4[0]);
console.log(string2.trim())
console.log(string4.replace("String","substring"));
console.log(string4.slice(1,6));


let word=string4.split(" ");
console.log(word);





// Date and time

let today=new Date();
console.log(today);
console.log(today.toString())
let date=Date();
console.log(date);


const date1 = new Date();
const [month, day, year] = [
  date1.getMonth(),
  date1.getDate(),
  date1.getFullYear(),
];
const [hour, minutes, seconds] = [
  date1.getHours(),
  date1.getMinutes(),
  date1.getSeconds(),
];

console.log(date1)


let birthday=new Date("December 07, 2002 7:50:00")
console.log(birthday);




// array


let array = ["nishkarsh",1,"ritik",2,"nitya",3,"pintu",4]
console.log(array[0]);
array[5]=6;//chaing value  by there index
console.log(array);
delete array[5];
console.log(array);
// insertion
array.push("aman");
console.log(array);
array.unshift("ashish");
console.log(array);
array.splice(2,0,'a','b','c','d','e','f')
console.log(array);

// searching
console.log(array.indexOf("ashish"))
console.log(array.includes("ashish"));
console.log(array.indexOf('a',3));



// object in array


let obj=[
    {no:1,name:"nishkarsh"},
    {no:2,name:"verma"}
]

console.log(obj)


let object=obj.find(function(object){
    return object.name=="nishkarsh";
})
console.log(object)

let object2=obj.find(object2=>(object2.name=="verma"));
console.log(object2)



//removing elements
console.log(array.pop());
console.log(array);
array.shift();
console.log(array);
array.splice(3,1);
console.log(array);



// empty array this is not working because you initiazed two time so first value will be coppied to another object
let number=[1,2,3,4,5];
let number2=number;
// number=[];this will not work
// number.length=0;
number.splice(0,number.length);

console.log(number);
console.log(number2);


// combination of two arrays and slicing

let arr3=[1,2,3,4,5]
let arr4=[6,7,8,9]
let combined=arr3.concat(arr4);
console.log(combined);

console.log(combined.slice(2,6));



// spread operator

let combine=[...arr3,...arr4];
console.log(combine)

let another=[...combine]
console.log(combine);


// iteration of whole array
for(let value of combine)
{
    console.log(value);
}
another.forEach(number => console.log(number));



// array;

let arr5=[1,2,3,4,5]
console.log(arr5);
let join=arr5.join(',');
console.log(join);
let split1=join.split(',');
console.log(split1);



let mess=`hello ji kese ho saareee`;
let part=mess.split(' ');
console.log(part);



// sorting in array;

let arr6=[8,6,4,3,3,2,1]
console.log(arr6.sort());


// reverse of array;
console.log(arr6.reverse());





// filter

let arr7=[1,2,-2,4,-3,7,-8,9]
let filtered=arr7.filter(value=>value>=0);
console.log(filtered);



// mapping array

let arr8=[1,2,3,4,5,6,7,8]
let mapped=arr8.map(value=>"studentno "+value);
console.log(mapped);




// mapping with objects

let arr9=[-1,0,3,4,5,-7,-8,9]
// let filtere=arr9.filter(value=>value>=0);
// let items=filtere.map(function(num) {
//     return {value:num}
// })
// console.log(items)
let items=arr9.filter(value=>value>=0).map(num=>{value:num});
console.log(items)
