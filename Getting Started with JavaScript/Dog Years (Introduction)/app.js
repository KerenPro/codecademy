const myAge= 1;

//early years variable that will change
let earlyYears=2;
earlyYears *= 10.5;
//later years is 2 years before my age
let laterYears = myAge-2;
laterYears *= 4;

console.log(`earlyYears: ${earlyYears}, laterYears: ${laterYears}`);

myAgeInDogYears = earlyYears+laterYears;
console.log(`My age is dog years: ${myAgeInDogYears}`);

const myName = 'Keren'.toLowerCase();
console.log(myName);

console.log (`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
