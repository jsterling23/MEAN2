function orderSupplies(item, callback) {
     let warehouse;
     const deliveryTime = Math.random() * 3000;

     setTimeout( function() {
          warehouse = {
               paint: {
                    product: 'Neon Green Paint',
                    directions: function() { return 'mix it!'}
               },
               brush: {
                    product: 'Horsehair brush',
                    directions: function() { return 'start painting!'}
               },
          };

          callback(warehouse[item]);
     }, deliveryTime)
}


// function dataCollection1(item){
//      console.log(`Take ${item.product} and ${item.directions()}`);
//      orderSupplies('brush',dataCollection2)
// }
//
// function dataCollection2(item){
//      let thing = item;
//
//      if (item.product != 'Horsehair brush'){
//           tryThis();
//      }
//      else {
//           console.log(`Take ${item.product} and ${item.directions()}`);
//      }
// }
//
// orderSupplies('paint',dataCollection1)
// orderSupplies('brush',dataCollection1)


// function tryThis() {
//      let items = ['paint','brush'];
//
//      for(let i = 0; i < items.length; i++){
//           // console.log(items[i])
//           setTimeout( function() {
//                orderSupplies(items[i], dataCollection1);
//           }, 10)
//
//      }
// }
//
// tryThis()

function receivedItem(item) {
  console.log(`Received ${item.product} time to ${item.directions()}`);
}

function first(){
     orderSupplies('paint', receivedItem);
     setTimeout(function() {
          orderSupplies('brush', receivedItem);
     }, 5000)
}

// orderSupplies('paint', receivedItem);
// orderSupplies('brush', receivedItem);

first()
