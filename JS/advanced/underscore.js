
var _ = {
   map: function(arry, callback) {
     for(let i = 0; i < arry.length; i++){
          console.log(arry[i]);
          arry[i] = callback(arry[i]);
     }
     console.log('out of the for loop')
   },
   reduce: function(arry, callback, memo) {
     let el = 0;
     let count = 1;
     if(!memo){
          memo = arry[0];
          console.log('memo',memo);
          el = 1
     }
     for(let i = el; i < arry.length; i++){
          console.log('in the for before the memo assignment', memo)
          memo = callback(memo, arry[i])
          console.log('loop',count,'new memo is',memo)
          ++count;
          console.log('arry[i]: ' + arry[i] + '. Memo: ' + memo)

     }
     console.log(memo)
     return memo
   },
   find: function(arry, callback) {
        console.log('in the function')
        for(let i = 0; i < arry.length; i++){
             if(callback(arry[i])) {
                  return arry[i];
             };
        };
   },
   filter: function(arry, callback) {
        var list = [];
        for(let i = 0; i < arry.length; i++){
             if(callback(arry[i])){
                  list.push(arry[i]);
             };
        };
        return list;
   },
   reject: function(arry, callback) {
        var list = [];
        for(let i = 0; i < arry.length; i++){
             if(!callback(arry[i])){
                  list.push(arry[i])
             }
        }
        return list;
   }
 }


 // *****************************
 const arry = [-2,2,5,3,12,3,4,8,9]
 // *****************************


function mapProcess(num){
     return num + 3;
}

function reduceProcess(memo, num){
     console.log('in callback: adding memo ' + memo + ' + num ' + num + '. Returning ' + (memo + num))

     return memo + num;
}

function findProcess(num){
     console.log('in the callback')
     return num % 3 === 0;
}

function filterProcess(num){
     return num > 5;
}

// console.log(_.find(arry, findProcess))


_.map(arry, mapProcess);
console.log(arry)



// _.reduce(arry, reduceProcess);
// console.log(arry)

// console.log(_.filter(arry, filterProcess));

console.log(_.reject(arry, filterProcess))
console.log(_.filter(arry, filterProcess))
