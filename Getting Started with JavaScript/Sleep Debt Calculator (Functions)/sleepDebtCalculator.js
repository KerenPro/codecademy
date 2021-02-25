function getSleepHours(day){
    day = day.toLowerCase();
    switch (day){
        case 'sunday':
            return 8;
            break;
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 8;
            break;
        case 'thursday':
            return 6;
            break;
        case 'friday':
            return 8;
            break;
        case 'saturday':
            return 9;
            break;
        default:
            return console.log('Please enter a day of the week');
            break;
    }
};

function getActualSleepHours(){
    let sum = getSleepHours('sunday')+getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday');
    return sum;
};

function getIdealSleepHours(){
    let idealHours = 8;
    return (idealHours*7);
}

function calculateSleepDebt(){
    let actualSleepHours =  getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    (actualSleepHours === idealSleepHours)? console.log("Got the perfect amount of sleep!") : (actualSleepHours>idealSleepHours? console.log('got '+(actualSleepHours-idealSleepHours)+' hours more sleep than needed!'): console.log ('You should get '+(idealSleepHours-actualSleepHours)+' hours more sleep!'))
};

calculateSleepDebt();