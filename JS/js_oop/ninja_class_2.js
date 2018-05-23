function Ninja(name){
     const self = this;
     var speed = 3;
     var strength = 105;

     this.health = 100;

     this.name = name;

     this.sayName = function(){
          console.log('My ninja name is ' + this.name + '!');
     };

     this.showStats = function(){
          console.log('Name: '+ this.name + ', Health: ' + this.health + ', Speed: ' + speed + ', Strength: ' + strength + '.')
          return this
     };

     this.drinkSake = function(){
          this.health += 10;
          return this
     };

     this.speedUp = function(coke){
          cokeUp(coke)
          return this
     }
     function cokeUp(coke){
          speed += coke;
          console.log('MASSIVE SPEED INCREASE TO ' + speed);
     }

     Ninja.punch = function(ninja){
          // const fighter = ninja;
          // if(fighter instanceof Ninja){
          //      console.log('not an instance of this class')
          // }
          ninja.health -= 10;
          console.log(ninja.name + ' was punched in the face by ' + this.name + ' and lost 10 health! ' + ninja.health + ' health remaining')
          if(ninja.health == 70){
               console.log(ninja.name + ' is getting fucked up!');
          }
          if(ninja.health == 50){
               console.log(ninja.name + ' is stumbling... But his beer is still full');
          }
          if(ninja.health == 30){
               console.log(ninja.name + ' needs some serious help!');
               console.log(ninja.name + ' did a line of coke from ' + this.name);
               ninja.speedUp(300);
          }
     }

     Ninja.prototype.kick = function(ninja){
          var health = 0;
          for(let i = 1; i <= strength; i++){
               health += 15;
          }
          ninja.health -= health;
          console.log(ninja.name + ' lost ' + health + ' health! ')
          if(ninja.health <= 1){
               console.log(ninja.name + ' is fucking dead...')
          }
          return this
     }
}

// *************************************************************************************************


// create a cat to fight the ninjas!

function Cat(name){
     const self = this;
     var speed = 3;
     var strength = 105;

     this.health = 100;

     this.name = name;

     this.sayName = function(){
          console.log('My ninja name is ' + this.name + '!');
     };

     this.showStats = function(){
          console.log('Name: '+ this.name + ', Health: ' + this.health + ', Speed: ' + speed + ', Strength: ' + strength + '.')
          return this
     };

     this.drinkSake = function(){
          this.health += 10;
          return this
     };

     this.speedUp = function(catnip){
          cokeUp(catnip)
          return this
     }
     function cokeUp(catnip){
          speed += catnip;
          console.log('MASSIVE SPEED INCREASE FROM CATNIP TO ' + speed);
     }

     Cat.prototype.claw = function(cat){
          // const fighter = ninja;
          // if(fighter instanceof Ninja){
          //      console.log('not an instance of this class')
          // }
          cat.health -= 10;
          console.log(cat.name + ' was clawwwwed in the face by ' + this.name + ' and lost 10 health! ' + cat.health + ' health remaining')
          if(cat.health == 70){
               console.log(cat.name + ' is getting fucked up!');
          }
          if(cat.health == 50){
               console.log(cat.name + ' is stumbling... But its saucer is still full');
          }
          if(cat.health == 30){
               console.log(cat.name + ' needs some serious help!');
               console.log(cat.name + ' did a line of coke from ' + this.name);
               cat.speedUp(300);
          }
     }

     Cat.prototype.back_claw = function(cat){
          var health = 0;
          for(let i = 1; i <= strength; i++){
               health += 15;
          }
          cat.health -= health;
          console.log(cat.name + ' lost ' + health + ' health! ')
          if(cat.health <= 1){
               console.log(cat.name + ' is fucking dead...')
          }
          return this
     }
}


// const cat1 = new Cat('meow');
// const ninja2 = new Ninja('Tom');
// const ninja3 = new Ninja('Perry');
// const rose = new Ninja('Rose');
const cat = new Cat('meow');
const cat2 = new Cat('friskers');


const ninja = new Ninja('Jerry');
const ninja1 = new Ninja('Tom');

cat.speedUp(5)
ninja.speedUp(5)
