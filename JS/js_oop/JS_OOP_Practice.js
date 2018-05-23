// function Person(name){
//      this.name = name;
//      var counter = 0;
//
//      // console.log('My name is ' + this.name);
//
//      this.vision = function(){
//           increment()
//           console.log('in the vision');
//           return this
//      }
//
//      this.stats = function showStats(){
//           console.log('counter is ' + counter);
//      }
//
//      function increment(){
//           ++counter;
//           return this
//      }
//
//      return this
//
// }
//
// const user = new Person('Jerry')
// const user2 = new Person('Jeff')
//
// user.vision().vision()
// user.stats()
//
// user2.stats()

const sample = function(){
     console.log('In the function')

     function add(a){
          console.log('in the add')
          return a + 5;
     }
     return add()
}

var test = sample()
