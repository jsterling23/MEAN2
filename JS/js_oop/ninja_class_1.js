function Ninja(name){
     var speed = 3;
     var strength = 3;

     this.health = 100;

     this.name = name;

     this.sayName = function(){
          console.log('My ninja name is ' + this.name + '!');
     };

     this.showStats = function(){
          console.log('Name: '+ this.name + ', Health: ' + this.health + ', Speed: ' + speed + ', Strength: ' + strength + '.')
     };

     this.drinkSake = function(){
          this.health += 10;
          return this
     };

     function increaseStrength(num){
          strength += num;
          return this
     }

     this.powerUp = function(num){
          increaseStrength(num);
          return this
     }
}

const ninja1 = new Ninja('Jerry');
ninja1.showStats()

ninja1.drinkSake()

ninja1.showStats()

ninja1.powerUp(10).powerUp(100);

ninja1.showStats()
