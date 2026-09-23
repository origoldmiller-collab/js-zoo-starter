//starter code
//python -m http.server
class Animal  {
  constructor(name , favFood) {
    this.name = name;
    this.favoriteFood = favFood;
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
}
class Tiger extends Animal {
  constructor(name) {
    super (name, "meat")
  }
}
class Bear  {
  constructor(name) {
    super (name , "fish")
  }
  sleep() {
    console.log(this.name + " hibernates for 4 months")
  }
}

function run() {
 var tigger = new Tiger("Tigger", "meat");
tigger.eat("meat");
tigger.eat("kibble");
var pooh = new Bear("Pooh", "fish");
pooh.eat("fish");
pooh.eat("meat");

}
run();
