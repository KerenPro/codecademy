//Today's forcast is 293 Kelvin
let kelvin = 273;

//Celsius is 273 degrees less than Kelvin
let celsius = kelvin-273;

//Fahrenheit = Celsius * (9/5) + 32 rounded down
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log (`The temperature is ${kelvin} degrees Kelvin.`)
console.log (`The temperature is ${celsius} degrees Celsius.`)
console.log (`The temperature is ${fahrenheit} degrees Fahrenheit.`)