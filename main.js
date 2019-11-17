// var name = "Yurij";
// var age = "30";
// var gender = "male";
// var speciality = "web-developer";

// var greet = function(name){
// 	console.log("Hello, my name is "+name+".");
// }

// var story = function(gender, age, speciality){
// 	console.log("I am "+gender+" and "+age+" year old. I am "+speciality);
// }
//  greet(name);
//  story(gender, age, speciality);

// //Описываем новую персону
// var name2 = "Jane";
// var age2 = "20";
// var gender2 = "famale";
// var speciality2 = "flower designer";

// var greetJane = function(name){
// 	console.log("Hello, my name is "+name+".");
// }

// var storyJane = function(gender, age, speciality){
// 	console.log("I am "+gender+" and "+age+" year old. I am "+speciality);
// }

// greetJane(name2);
// storyJane(gender2, age2, speciality2);

// var person = {
// 	//Свойства объекта
// 	name: "Yurij",
// 	age: 30,
// 	gender: "male",
// 	speciality: "web-developer",

// 	//Метод объекта
// 	greet: function () {
// 		console.log("Hello my name is " + this.name +" .");
// 	},
// 	story: function() {
// 		console.log("I am "+this.gender+
// 					" and "+this.age+
// 					" year old. I am "+this.speciality);
// 	}

// }

// person.greet();
// person.story();

// var person2 = {
// 	//Свойства объекта
// 	name: "Jane",
// 	age: 20,
// 	gender: "famale",
// 	speciality: "flower designer",

// 	//Метод объекта
// 	greet: function () {
// 		console.log("Hello my name is " + this.name +" .");
// 	},
// 	story: function() {
// 		console.log("I am "+this.gender+
// 					" and "+this.age+
// 					" year old. I am "+this.speciality);
// 	}

// }

// person2.greet();
// person2.story();

function Person (name, age, gender, speciality) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.speciality = speciality;

	this.greet = function(){
		console.log("Hello my name is " + this.name +" .");
	},
	
	this.story = function(){
		console.log("I am "+this.gender+
					" and "+this.age+
					" year old. I am "+this.speciality);
	}
}

var Egor = new Person("Egor", 20, "male", "designer");
Egor.greet();
Egor.story();

var July = new Person("July", 24, "famale", "dancer");
July.greet();
July.story();