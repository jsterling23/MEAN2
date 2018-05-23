// function magic_multiply(x,y){
//
//      let result = x * y;
//
//      if (Array.isArray(x)){
//           let array = [];
//           for(let i = 0; i < x.length; i++){
//                let num = x[i] * y;
//                array.push(num)
//           }
//           return array
//      };
//
//      if (typeof y == 'string'){
//           result = 'Error: Cannot multiply a string'
//           return result
//      };
//
//      if (typeof x == 'string'){
//           var new_string = '';
//           for (let i = 1; i <= y; i++){
//                new_string += x
//           }
//           return new_string
//      };
//
//      return result
// };
//
// let test1 = magic_multiply(5, 2);
// console.log(test1);
//
// let test2 = magic_multiply(0, 0);
// console.log(test2);
//
// let test3 = magic_multiply([2, 112, 3], 10);
// console.log(test3);
//
// let test4 = magic_multiply(7, "three");
// console.log(test4);
//
// let test5 = magic_multiply("Brendo", 4);
// console.log(test5);
//
//
// // we can test if an array is an array by using the .isArray() function
