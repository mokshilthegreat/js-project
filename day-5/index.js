// //Q1:-

// let radius = 7;

// let area = 22/7 * radius * radius;

// console.log(" Q1:- The area of the circle is:", area);

// //Q2:-

// let a = 10;
// let b = 20;
// let c = 5;

// console.log(" Q2:-", a*b / c + b-a);

// //Q3:-

// let x = 5;
// let y = 10;
// x += 2;
// y *= x;

// console.log(" Q3:- x=",x);
// console.log("      y=",y);

// // Q4:-
// let num = 10;
// let num2 = 10;
// let num3 = 10;
// let num4 = 10;

// num +=15;
// num2 -=5;
// num3 *=3
// num4 /= 2
// //
// console.log(" Q4:-",num);
// console.log(" (ii)=",num2);
// console.log("(iii)=",num3);
// console.log(" (iv)=",num4);

// //Q5:-

// let score1 = 85;
// let score2 = 90;

// console.log( "Q5:-",score1 > 80 && score2 > 80)

// //Q6:-

// let str1 = "apple";
// let str2 = "banana";

// let result = str1 < str2;

// console.log("Q6:-", result);

// //Q7:-

// let age = 15
// if(age >=18){
//     console.log("Q6:-","hasDrivingLicense")
// }else{
//    console.log(" not have hasDrivingLicense");
// }

// //Q8:-
// let Num1 = 10
// let Num2 = 50

// console.log("Q8:-",10>11 && 50<10)

// //Q9:-

// number = "123.45"
// number = Number(number)
// let num1 =number + 10;
// console.log( "Q9:-",num1);

// //Q10:-
// let A =true;
// A = String(A)
// let B = " is the value";
// console.log( "Q10:-",A+B);

// //Q11:-
// /* it's in innerhtml */

// //Q12:-

// let a1 = 5;
// let b1 = 10;
// let res = a1+b1;
// console.log( "Q12:-",res)

// //Q13:-

// let time = new Date()

// let hour = time.getHours()

// let minutes = time.getMinutes()

// let seconds = time.getSeconds()

// console.log("Q13:-",`${hour}:${minutes}:${seconds}`)

// //Q14:-

// //Q15:-

// let date = new Date()

// let day = date.getDate()

// let month = date.getMonth()+1

// let year = date.getFullYear()

// console.log("Q15:-",`${day}-${month}-${year}`)
// console.log(`      ${day}\\${month}\\${year}`)

// console.log(`      ${month}-${day}-${year}`)
// console.log(`      ${month}\\${day}\\${year}`)

// //Q16:-

// /*let side1 = 5;
// let side2 = 6;
// let side3 = 7;

// let Area = side1 + side2 + side3 /2;

// console.log("Q16:-",area )*/

//--------------------------------------------------------------------------------------------------

// //Q-1

// let array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// //Q-2

// let numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// //Q-3
// let Count =0
// let string = "Hello, World!";

// for (let i = 0; i < string.length; i++) {
// count ++
// }

// console.log("Q-3  ->", count);

// //Q-4

// let str = "JavaScript";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// //Q-5

// let m = 0;
// for (let j =1;j<=5;j++){
// m += j;
// }
//     console.log(m)
// //Q-6

// const num = [3, 1, 4, 1, 5, 9];
// let max = num[0];

// for (let i = 1; i < num.length; i++) {
//   if (num[i] > max) {
//     max = num[i];
//   }
// }

// console.log(" Q-6  Maximum value:", max);

// //Q-7

// let array2 = [1,2,3,4,5]
// for(let i =array2.length;i>=0;i--){
//     console.log(array2[i])
// }
// //Q-8
// let greeting = "hello";

// for (let i = 0; i < greeting.length; i++) {
//   console.log(greeting[i].toUpperCase());
// }

// Q - 9;
let count = 0;
let i = 0;
let j = [2, 4, 6, 8, 10];
while (i < j.length) {
  count++;
  i++;
}
console.log(count);

// //Q-10

// const d = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < d.length; i++) {
//   if (d[i] % 2 == 0) {
//     console.log(d[i]);
//   }
// }
// //Q-11

// //Q-12
// let fruits = ["apple", "banana", "cherry"];
// let totalLength = 0;

// for (let i = 0; i < fruits.length; i++) {
//   totalLength += fruits[i].length;
// }

// console.log("Total length :", totalLength);

// //Q-13

// const e = ["This", "is", "JavaScript"];

// let ans = "";

// for (let i = 0; i < e.length; i++) {
//   ans += e[i];
// }

// console.log(ans);

// // //Q:- 9,11,14 & 15
