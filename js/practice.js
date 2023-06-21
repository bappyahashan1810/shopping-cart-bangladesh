
const threeParameter = (one, two, three) => one * two * three;
const multipleResult = threeParameter(2, 5, 4);
console.log(multipleResult);
2.
const multiPleLine = `
I am Web Developer
I Love to Code
I love to eat biriyani
`;
console.log(multiPleLine);



const twoValue = (oneValue, anotherValue = 0) => oneValue + anotherValue;

const result = twoValue(20);
console.log(result);


const ArrowFunction = (f1, f2, f3) => {
    const NewEven = [f1, f2, f3];
    const NewFrinds = [];
    for (const New of NewEven) {
        if (New.length % 2 === 0) {
            NewFrinds.push(New);

        }
    }
    return NewFrinds;

}

const friends = ['bappy', 'ibrahim', 'mustak'];
const result2 = ArrowFunction(...friends);
console.log(`Second result ${result2}`);


const squareAvarage = (one, two, three) => {
    const numbers = [one, two, three];
    let sum = 0;
    const value = numbers.length;
    for (const number of numbers) {
        const sqr = Math.pow(number, 2);
        sum = sum + sqr;

    }
    const avg = sum / value;
    return (avg).toFixed(2);
}
const numbers = [2, 3, 4];
const result3 = squareAvarage(...numbers);
console.log(`third ans: ${result3}`);

const s = 0;
const fiveNumbers = [1, 2, 3, 4, 5].map(x => Math.pow(x, 2));
const fiveNumbersSum = fiveNumbers.map(x => x + s);
const avge = fiveNumbersSum / 5;
console.log(fiveNumbers);
console.log(avge);