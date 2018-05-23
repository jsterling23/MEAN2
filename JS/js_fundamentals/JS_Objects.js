let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

// for(var key in students){
//      console.log('Name: '+students[key].name+', Cohort: '+students[key].cohort)
// }

let users = {
    employees: [
        {
             'first_name':  'Miguel',
             'last_name' : 'Jones'
        },
        {
             'first_name' : 'Ernie',
             'last_name' : 'Bertson'
        },
        {
             'first_name' : 'Nora',
             'last_name' : 'Lu'
        },
        {
             'first_name' : 'Sally',
             'last_name' : 'Barkyoumb'
        }
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function iterate(array){
     for (const key in array) {
          console.log(key.toUpperCase());
          for(let i = 0; i < array[key].length; i++){
               const num = i + 1
               const fname = array[key][i].first_name;
               const lname = array[key][i].last_name;
               const length = fname.length + lname.length;
               console.log(`${num} - ${fname}, ${lname} - ${length}`)
          }
     }
}
iterate(users)


// for (const key in users) {
//           console.log(key.toUpperCase());
//           for (let i = 0; i < users[key].length; i++) {
//                const num = i + 1;
//                const fname = users[key][i].first_name;
//                const lname = users[key][i].last_name;
//                const length = fname.length + lname.length;
//                console.log(`${num} - ${lname}, ${fname} - ${length}`);
//           }
//        };




//  EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9
