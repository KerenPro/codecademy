let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let  runnerAge = 20;

if (runnerAge>=18 && earlyRegister){
    raceNumber += 1000;
}

if (runnerAge>18 && earlyRegister){
    console.log(`Racer #${raceNumber}. You will run at 9:30 AM`);
} else if (runnerAge>18 && !earlyRegister) {
    console.log(`Racer #${raceNumber}. You will run at 11:00 AM`)
} else if (runnerAge < 18){
    console.log(`Racer #${raceNumber}. You will run at 12:30 PM`)
} else {
    console.log(`Racer #${raceNumber}. Please see registration desk`)
}