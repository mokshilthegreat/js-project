//1

console.log(a); // undefined
var a = 5;
console.log(a); // 5

//2

console.log(b); // undefined
var b = 10;
console.log(b); // 10

//3

var x = 1;
var x = 2;
console.log(x); // 2

//4

console.log(c); // ReferenceError
let c = 20;

//5

function test() {
  console.log(d); // undefined
  var d = 30;
  console.log(d); // 30
}
test();

//6

function test() {
  console.log(e); // ReferenceError
  let e = 40;
}
test();

//7

console.log(f); // ReferenceError
const f = 50;

//8

function hhhhoo() {
  console.log(g); // undefined
  var g = 60;
}
hhhhoo();

//9

function foo() {
  console.log(h); // ReferenceError
  let h = 70;
}
foo();

//10

function foo() {
  console.log(i); // undefined
  var i = 80;
  console.log(i); // 80
}
foo();
