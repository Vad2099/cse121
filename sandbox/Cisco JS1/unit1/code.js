const person = {
  name: "Maria",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};
   
person.greet();