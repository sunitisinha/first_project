// alert("Please atleast you can define >6 characters the username");
//Two types of data type-
//Primitive data type--by using single variables to we can store only one data
//String,Number,Boolean,Undefined,Null
//String--group of alphanumeric characters--"",''
var a = "Hello Good Morning..!";
document.write(a);
console.log(a);
console.log(typeof a);

//Number--Float --point values

let b = 456789;
console.log(b);
console.log(typeof b);
//decimal--without any point
//Boolean--two values true--when the condition is success

var c = true;
console.log(c);
console.log(typeof c);
//false--when the condition is failure
//undefined--variable with no data

var d;
console.log(d);
console.log(typeof d);
//null--variable with no value;

var e = null;
console.log(e);
console.log(typeof e);
//Non Primitive Datat type--by using single variables to we can store multiple data

//Array,Object
//[array data]--mutable object--we can update the array data
let arr = ["javascript", 12345, true, 77, 8, false, null, "Hello"];
console.log(arr);
console.log(arr.length);
console.log(arr[4]);

//Length--which is used to check the array length
//Start from 1
//Position--we can get specific data with in the array
//Start from 0

//Array methods
//pop--which is used to remove the data in end of array
//push--which is used to add the data in end of array
//shift--which is used to add the data in front of the array
//unshift
//splice
//slice
//indexof
//sort
//reverse
//concat

arr = ["javascript", 12345, true, 77, 8, false, null, "Hello"];
console.log(arr);
arr.pop();
console.log(arr);

console.log(arr);
arr.push(true);
console.log(arr);

arr = ["javascript", 12345, true, 77, 8, false, null, "Hello"];
arr.shift();
console.log(arr);
