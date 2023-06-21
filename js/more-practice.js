const products = [
    { name: 'Mobile', price: 20000, version: 11 },
    { name: 'Asus Laptop', price: 120000, version: 6 },
    { name: 'Bike', price: 200000, version: '100cc' }

]
products.forEach(x => {
    console.log(x.name);

    // console.log(x.version)
});

products.forEach(x => {
    console.log(x.price);
})


const numbers = [2, 5, 10, 22, 12, 33, 46, 78];
const twoDoubled = numbers.map(x => x * 2);
numbers.forEach(x => {
    console.log(x);
})
const twenttyBiger = numbers.filter(x => x > 20);
console.log(twenttyBiger);
// console.log(twoDoubled);
const evenNumber = numbers.find(x => x % 2 === 0);
console.log(evenNumber);
