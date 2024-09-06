//complete this code
class Animal {
	constructor(species){
		this._species=species;
	}
	get species(){
		return._species();
	}
	makeSound(){
		console.log("Some generic animal sound");
	}
}

class Dog extends Animal {
	constructor(){
         super("Dog");
	}
	bark(){
		console.log("bark");
	}
	makeSound("woof");
}

class Cat extends Animal {
	constructor(){
		super("Cat");
	}
	purr(){
		console.log("purr");
	}
	makesSound(){
		console.log("meow");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
