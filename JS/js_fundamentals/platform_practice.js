let x = {
     name: 'Jerry',
     dob: 'June ' + 1 + ', ' + 1987,
     admin: true,
     language: 'javascript',
     origin: 'marz'
}

// for(var key in x){
//      console.log(x[key])
// }

let surf_boards = [
     {
          id: 1,
          brand: 'Simon Anderson',
          price: 300
     },
     {
          id: 2,
          brand: 'Quick Silver V2',
          price: 340
     },
     {
          id: 3,
          brand: 'Element Signature',
          price: 450
     }
]
// console.log(surf_boards[1].brand)

for (var key in surf_boards){
     for (var i in surf_boards[key]){
          console.log(surf_boards[key][i])
     }
}
