var cars = [
    'Ford',
    'Mazda',
    'Kia',
    'BMW'
]

var any = [42, 'Apple', {a: 1}]


console.log(cars);
console.log(cars[3]);
// console.log(any);

console.log(cars.length);

//add one car
cars.push('Audi');
console.log(cars);

//Delete last element and return
var audi = cars.pop();
console.log(cars, audi)

//Delete first element and return
var ford = cars.shift();
console.log(cars, ford);

//Adds to the beginning 
cars.unshift(audi);
console.log(cars);

var index = cars.indexOf('Kia')
var kia = cars[index]

console.log(kia);

// console.log(cars.indexOf('Kia'));