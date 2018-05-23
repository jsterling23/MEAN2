// var ninja = 'libby'
// setTimeout( function(){
//      console.log(ninja,'timeout');
// }, 2000);
// console.log(ninja)

// console.log("Now: ");
// console.log('Declaring a variable right meow..');
// var ninja = 'Libby';
// setTimeout( function myCallBackFunction(){
//      console.log('Later: ');
//      console.log(ninja,'Later');
// }, 2000);
// console.log('Printing ninja value. ');
// console.log(ninja, 'Now');


// var a = 2;
// var b = function(){
//      console.log('Something');
// };
// function doSomething(x){
//      console.log(typeof(x));
// }
// doSomething(a);
// doSomething(b);



// function doSomething(possibleCallback){
//      if (typeof(possibleCallback) === 'function'){
//           console.log('possibleCallback is a callback');
//           possibleCallback();
//      }
//      else {
//           console.log('possibleCallback ', possibleCallback, ' is not a callback');
//      }
// }
// doSomething(function mycallback(){ console.log ('yes I am a call back') });
// doSomething('string');
//
// function makePasta(pasta, makeSauce, choose){
//      console.log('Boil Water');
//      console.log('putting '+pasta+' pasta in the water');
//
//      var sauce = makeSauce();
//
//      console.log('mixing the sauce');
//      console.log('pasta is done!');
//
//      var test = choose();
//
//      return "pasta with " + sauce + " sauce. Served up in a " + test + " Voila!";
// }
//
// function makePesto(){
//      console.log('making pesto');
//      return "pesto";
// }
//
// function makeAlfredo(){
//      console.log('Making Alfredo');
//      return 'alfredo'
// }
//
// function chooseBowl(){
//      console.log('Reached for a bowl..');
//      return 'bowl'
// }
//
// function choosePlate(){
//      console.log('Reached for a plate...');
//      return 'plate'
// }
//
// console.log(makePasta('penne', makePesto, chooseBowl));
// console.log(makePasta('puke', makeAlfredo, choosePlate));



//
// function leadBootcamp(leader, language){
//      var outcome = leader(language);
//      console.log(outcome);
// }
//
// function Mike(language){
//      var languages = {
//           'javascript':'Successful',
//      }
//      if (languages[language]){
//           return languages[language];
//      }
//      else {
//           return 'maybe not yet';
//      }
// }
//
// function Jerry(language){
//      var languages={
//           'javascript':'Successful',
//      }
//      if(languages[language]){
//           return languages[language];
//      }
//      else {
//           return 'Maybe not yet';
//      }
// }
//
// function Jimmy(language){
//      var languages={
//           'javascript':'Successful',
//           'python':'Successful',
//      }
//      if(languages[language]){
//           return languages[language];
//      }
//      else {
//           return 'Maybe not yet';
//      }
// }
//
// leadBootcamp(Jerry, 'python');
// leadBootcamp('python', Mike);
// leadBootcamp('python', Jimmy);

//
// function each(arry, callback){
//      for(var i = 0; i < arry.length; i++){
//           callback(arry[i]);
//      }
// }
//
// each([1,2,3,4,5,6,7,8], function(num){
//      console.log(num + ' I am from the callback!');
// })






// function getStuffFromdatabase(callback){
//      var data;
//      var myTimer = setTimeout(function(){
//           if(typeof(callback) === 'function'){
//                data = [{name:'Jerry'},{name:'Billy'},{name:'Scott'}];
//                callback(data);
//           }
//      }, 10000);
//      return data;
// }
//
// function requestDataFromDatabase(){
//      var data = getStuffFromdatabase( function myCallback(data){
//           console.log(data, 'Asynchronous');
//           for (var i = 0; i < data.length; i++){
//                console.log(data[i].name);
//           }
//      });
//      console.log(data);
// }
//
// function catchFly(){
//      console.log("I just caught a fly...")
// }
//
// requestDataFromDatabase();
//
// console.log('hello');
// catchFly()


//
// function getStuffFromDatabase(resolve, reject){
//      var data = 'whee';
//      setTimeout( function() {
//           data = [{name:'Jerry'},{name:'Jason'},{name:'Garret'}];
//           resolve(data);
//      }, 1000 );
//      reject();
//      return data
// }
//
// function requestDataFromDatabase(){
//      console.log('running');
//
//      var data = new Promise(function(resolve,reject) {
//           getStuffFromDatabase(resolve,reject);
//      });
//
//      data.then( function(data) {
//           console.log(data, 'Asynchronous');
//           for (var i = 0; i < data.length; i++){
//                console.log(data[i].name);
//           }
//      });
//
//      data.catch(function(){
//           console.log('failure');
//      })
//      console.log('end');
// }
//
// requestDataFromDatabase();

























// var ninja = "libby";
// setTimeout( function(){
//      console.log(ninja);
// }, 2000);
// console.log(ninja)


// var a = 2;
// var b = function() {
//      console.log('something');
// };
//
// function doSomething(x){
//      console.log(typeof(x));
// }
// doSomething(a);
// doSomething(b);








// function doSomething(callback){
//      if(typeof(callback) === 'function'){
//           console.log('this is a callback function');
//           callback();
//      }
//      else {
//           console.log('callback: ', callback, ' Is not a callback function');
//      }
// }
//
// function callback(){
//      console.log('this the function I passed in... It is my callback function');
// }
// doSomething(callback);
// doSomething('string');






// function makePasta(pasta, makeSauce){
//      console.log('boil water');
//      console.log('putting ' + pasta + ' pasta in the water');
//
//      var sauce = makeSauce();
//
//      console.log('mixing the fucking sauce..');
//      console.log('Pasta is probably done... Eh...');
//      return pasta + ' Pasta with ' + sauce + ' sauce... Voila!!';
// }
//
// function makePesto(){
//      console.log("Makeing pesto from the garbage");
//      return 'Garbage Pesto'
// }
// function makeFuckingSomething(){
//      console.log('Look, i mixed some kind of fucking sauce... Deal with it')
//      return 'Fucking something sauce'
// }
//
//
// // console.log(makePasta('penne', makeFuckingSomething));
// console.log(makePasta('Shits', makePesto));




//
// function leadBootcamp(language, leader){
//      var outcome = leader(language);
//      console.log(outcome);
// }
//
// function mike(language){
//      var languages = {
//           'javascript':'yes',
//           'python':'yes',
//           'ruby':'yes'
//      }
//
//      if(languages[language]){
//           console.log('in the languages',languages[language])
//           return languages[language]
//      }
//      else {
//           return 'Maybe not yet';
//      }
//
// }
//
// function Jerry(language){
//      var languages = {
//           'javascript':'yes',
//           'python':'yes',
//           'ruby':'yes',
//           'django':'yes',
//           'html':'yes',
//      }
//      if(languages[language]){
//           return languages[language];
//      }
//      else {
//           return 'Maybe not yet';
//      }
// }
//
// function Dom(language){
//      var languages = {
//           'ruby':'yes',
//           'django':'yes',
//      }
//      if(languages[language]){
//           return languages[language];
//      }
//      else {
//           return 'Maybe not yet';
//      }
// }
//
// function Rose(language){
//      var languages = {
//           'ruby':'yes',
//           'django':'yes',
//           'javascript':'yes',
//      }
//      if(languages[language]){
//           return languages[language];
//      }
//      else {
//           return 'Maybe not yet';
//      }
// }
//
// leadBootcamp('python', mike);
// leadBootcamp('django', Jerry);
// leadBootcamp('django', Dom);
// leadBootcamp('django', Rose);




// function print(doSomething){
//      var result = doSomething();
//      console.log(result);
// }
// print(function returnFive(){ return 5; });




// function start(x, callback){
//      var thing1 = callback(x);
//      return thing1;
// };
//
// function callOther(x){
//      console.log('in the call other');
//      var next = function(num){
//           console.log('inceptionnnnnn');
//           console.log(num * 100);
//      };
//      next(x);
// };
//
//
// start(2,callOther);
// start(200, callOther);


//
// function each(arry, callback){
//
//      for(let i = 0; i < arry.length; i++){
//           callback(arry[i]);
//      };
// };
//
// function theFunction(num){
//      console.log(num + ' I am the callback');
// }
// each([1,2,3,4,5,2,6,2,4], theFunction);



// *****************************************************
//
// function getStuff(callback){
//      var data;
//      // console.log(data);
//      console.log('in getstuff function with callback, creating var timer')
//      var timer = setTimeout(function(){
//           if(typeof(callback) == 'function'){
//                console.log('in the if statement!')
               // data = [
               //      {name:'Jerry'},
               //      {name:'Chris'},
               //      {name:'Dom'},
               //      {name:'Pavell'},
               // ];
//                console.log('executing callback with ifstatement data')
//                callback(data)
//                console.log('finished executing callback with ifstatement data')
//           }
//      }, 0);
//      console.log('after the var timer..')
//      return 'returned data' + data;
// };
//
// function requestDataFromDatabase(){
//      console.log('before function callback made');
//
//      function callback(data){
//           console.log('executing function callback with data...')
//           console.log(data, "Asynchronous");
//           for(let i = 0; i < data.length; i++){
//                console.log(data[i].name);
//           }
//           console.log('finished executing function callback with data');
//      };
//
//      console.log('after function callback made');
//
//      console.log('creating var data - function called getstuff with callback function as the param')
//      var data = getStuff(callback);
//
//      console.log('right after var data',data)
//      console.log('After the var data - function called getstuff with callback has run');
//
//
//      console.log('end of the requestDataFromDatabase function... data >',data);
//      console.log(data);
//
//
// }
//
// requestDataFromDatabase()


// *****************************************************************








//
// function getStuff(resolve, reject){
//      var data = 'What the fuck';
//
//      setTimeout(function(){
//           // data = [];
//           data = [
//                {name:'Jerry'},
//                {name:'Chris'},
//                {name:'Dom'},
//                {name:'Pavell'},
//           ];
//           resolve(data)
//
//      }, 0);
//      // reject();
//      // return data;
// };
//
//
// function request(){
//      console.log('Running...');
//
//      var data = new Promise(function(resolve, reject){
//           getStuff(resolve, reject);
//      });
//
//      data.then(function(data){
//           console.log(data, "Asynchronous");
//           for(let i = 0; i < data.length; i++){
//                console.log(data[i].name);
//           }
//      });
//
//      data.catch(function(){
//           console.log('FAIL');
//      });
//
//      console.log('Fin..');
// }
//
// request();









//
// function outer() {
//      var count = 0;
//      console.log('in the outer function')
//
//      function inner(x) {
//           console.log(x)
//           if(typeof(x) === 'string'){
//                console.log('This is a string param');
//           }
//           if(typeof(x) === 'number'){
//                console.log('this is a number');
//           }
//           if(typeof(x) === 'function'){
//                console.log('This is a mother fucking function')
//           }
//           ++count;
//           console.log(count)
//           console.log('in the inner function AFTER the if statements');
//      };
//
//      return inner
// };
//
// var fun = outer();
// fun('hello');
// fun('world');
// fun(1);
// fun(function(){
//      console.log('the passed in function')
// });
// fun('WHOO');
