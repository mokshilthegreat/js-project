let email = "xyz@gmail.com";
let pass = "zyx123456";

if (email === "xyz@gmail.com") {
  if (pass === "zyx123456") {
    console.log("login successful");
  } else {
    console.log("invalid password");
  }
} else {
  console.log("invalid email id");
}

let a = 10;
let b = 22;
let c = 19;

if(a>b){                                                                                                              
    if(a>c){
        console.log("a is max")
    }else{
        console.log("c is max")
    }
}else{
    if (b>c){
        console.log("b is max")
    }else{
        console.log("c is max")
    }
}

let arr = [1,"12", 2, false, 5, "vccvcsvc"];

console.log(arr[4]);