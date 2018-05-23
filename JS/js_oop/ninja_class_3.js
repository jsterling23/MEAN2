


class Ninja {
     constructor(name) {
          this.name = name;
          this.health = 100;
          this.speed = 3;
          this.strength = 3;
     }
     sayName() {
          console.log(`My name is ${this.name}.`);
     }
     showStats() {
          console.log(`Health: ${this.health}. Strength: ${this.strength}. Speed: ${this.speed}.`);
     }
     drinkSake() {
          this.health += 10;
          return this;
     }
}

// const Jerry = new Ninja('Toyota');
// Jerry.sayName();
// Jerry.showStats();
// Jerry.drinkSake();
// Jerry.showStats();

class Sensei extends Ninja {
     constructor(name){
          super(name);
          this.health = 200;
          this.speed = 10;
          this.strength = 10;
          this.wisdom = 10;
     }
     speakWisdom(){
          super.drinkSake();
          console.log('You have increased your health... My wise words are... "Aim low... You will always hit the mark".')
     }
}

const Adam = new Sensei('Adam');
console.log(Adam)
Adam.speakWisdom()
console.log(Adam)
