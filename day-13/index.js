// //IIFE
//  let a = 20;
//   let b = 10;
// (function () {

//   console.log(a + b);
// })();

// function outer() {
//   let a = 55;
//   let b = 10;

//   function inner() {
//     console.log( a + b);
//   }

//   return inner;
// }

// let infun = outer();

// infun();

var userName = "batman";
console.log(userName);
function hello() {
  function show() {
    var userName = "superman";
    console.log(userName);
  }

  show();
  console.log(userName);
}
hello()