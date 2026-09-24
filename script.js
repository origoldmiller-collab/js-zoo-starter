//starter code
//python -m http.server
var animalPop = 0
class Animal  {
  constructor(name , favFood) {
    this.name = name;
    this.favoriteFood = favFood;
    animalPop++
  }
  sleep() {
    console.log(this.name + " sleeps for 8 hours")
  }
  eat (food){
    console.log(this.name + " eats " + food);
    if (food == this.favoriteFood){
      console.log("YUM!!! " + this.name + " wants more " + food);
    }
  }
  static getPopulation() {
	  return animalPop;
  }
}
class Tiger extends Animal {
  constructor(name) {
    super (name, "meat")
  }
}
class Bear extends Animal {
  constructor(name) {
    super (name , "fish")
  }
  sleep() {
    console.log(this.name + " hibernates for 4 months")
  }
}
class Unicorn extends Animal {
  constructor(name) {
    super (name, "marshmallows")
  }
  sleep() {
    console.log(this.name + " sleeps in a cloud")
  }
}
class Giraffe extends Animal {
  constructor(name) {
    super (name, "leaves")
  }
  eat (food){
    if (food == this.favoriteFood){
      super.eat(food)
    } else {
      console.log("YUCK!!! " + this.name + " will not eat " + this.favoriteFood);
    }
  }
}
class Bee extends Animal {
  constructor(name) {
    super (name, "pollen")
  }
  eat (food){
    if (food == this.favoriteFood){
      super.eat(food)
    } else {
      console.log("YUCK!!! " + this.name + " will not eat " + this.favoriteFood);
    }
  }
  sleep (){
    console.log(this.name + " does not sleep")
  }
}
class Zookeeper {
  constructor(name){
    this.name = name
  }
  feedAnimals(arrayOfAnmls, food){
    console.log(this.name + " is feeding " + food + " to " + arrayOfAnmls.length + " animals of " + Animal.getPopulation() + " animals");
    for (let i  = 0; i < arrayOfAnmls.length; i++){
      arrayOfAnmls[i].eat(food)
    }
  }
}
function run() {
 var tigger = new Tiger("Tigger", "meat");
tigger.eat("meat");
tigger.eat("kibble");
var pooh = new Bear("Pooh", "fish");
pooh.eat("fish");
pooh.eat("meat");
var rarity = new Unicorn("Rarity", "marshmallows");
rarity.eat("marshmallows");
rarity.eat("meat");
rarity.sleep();
var gemma = new Giraffe("Gemma" , "leaves");
gemma.eat("meat");
gemma.eat("leaves");
gemma.sleep();
var stinger = new Bee("Stinger" , "pollen");
stinger.eat("meat");
stinger.eat("pollen");
stinger.sleep();
let arrayOfinstances = [tigger, pooh , rarity , gemma , stinger]
var zooBot = new Zookeeper("zoeBot");
zooBot.feedAnimals(arrayOfinstances, "mushrooms");
console.log(Animal.getPopulation())
}
run();
