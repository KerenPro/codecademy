let input = 'hello summoner what song shall we play today';
let vowels = ['u', 'i', 'e', 'o', 'a'];
let resultArray = [];

for (let i=0; i<input.length; i++){
    for (let j=0; j<vowels.length; j++){
        if(input[i]===vowels[j]){
            if (input[i]=== 'e'){
                resultArray.push('e');
            }
            if (input[i]=== 'u'){
                resultArray.push('u');
            }
            resultArray.push(input[i]);
        }
    }
}

console.log(resultArray);