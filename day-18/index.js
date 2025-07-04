// function Emp(name, age, area) {
//   let obj = {};
//   obj.name = name;
//   obj.age = age;
//   obj.area = area;
//   return obj;
// }
// let xyz = Emp("xyz",19,"paldi")
// console.log(xyz)

// constructor function -->

// function Emp(name, age, area) {
//   this.name = name;
//   this.age = age;
//   this.area = area;
// }

// let xyz = new Emp("xyz", 19, "paldi");
// console.log(xyz);


//---------------------------------------------------------------------------------------------------------
class Employee {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
    
  }

  good(){
    console.log(this.good)
  }
}

let abc= new Employee( 5.4, 80);
let xyz = new Employee( 6, 90);

console.log(xyz);
xyz.good()

