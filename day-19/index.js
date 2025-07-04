function Animals(petName, age, colour) {
  this.petName = petName;
  this.age = age;
  this.colour = colour;
}
function dog(petName, age, colour) {
  Animals.call( petName, age, colour);
}

let Shearuu = new Dog("jorden", "1.5", "black");

console.log(Shearuu);