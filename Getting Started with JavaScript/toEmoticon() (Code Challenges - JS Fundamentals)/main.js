// Write your function here:
function toEmoticon(emotion){
    switch (emotion){
        case 'shrug':
            return '|_{"}_|';
            break;
        case 'smiley face':
            return ':)';
            break;
        case 'frowny face':
            return ':(';
            break;
        case 'winky face':
            return ';)';
            break;
        case 'heart':
            return '<3';
            break;
        default:
            return '|_(* ~ *)_|';
            break;
    }
}

// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever"))
// Should print  '|_(* ~ *)_|'
console.log(toEmoticon("shrug"));
console.log(toEmoticon("smily face"));
console.log(toEmoticon("frowny face"));
console.log(toEmoticon("winky face"));
console.log(toEmoticon("heart"));
console.log(toEmoticon("bleh"));
// We encourage you to add more function calls of your own to test your code!
