const num = [10, 20, 30, 40, 50];



//solution 1
let sum = 0;
for ( let n of num){
    sum = sum + n;
}
console.log(sum);
//150

//solution 2  use reduse
const total = num.reduce( (accumulator, currentValue) =>{
    return accumulator + currentValue ;
});
console.log(total);
//150 


//when accumulator have Initial 
const total2 = num.reduce( (accumulator, currentValue) =>{
    return accumulator + currentValue ;
} , 40);
console.log(total2);
//190


// ex2
const cartItems = [
    {item:"item", quality:1, id:1, price:99},
    {item:"item", quality:2, id:1, price:89},
    {item:"item", quality:3, id:1, price:79}
]

const cartPrice = cartItems.reduce ((acc,curr) => {
    return acc + curr.quality * curr.price ;
} , 0);
console.log(cartPrice);
// 514

// ex3
const cartItems2 = [
    {item:"item", quality:1, id:1, price:"99 $"},
    {item:"item", quality:2, id:1, price:"89 $"},
    {item:"item", quality:3, id:1, price:"79 $"}
];

const cartPrice2 = cartItems2.reduce ((acc,curr) => {
    const currentPrice = parseInt(curr.price.split(" ")[0]);
    return acc + curr.quality * currentPrice ;
} , 0);
console.log(cartPrice);
// 514