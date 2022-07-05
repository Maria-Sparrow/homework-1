let arrayOfNumbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, -87, 23, 2, 56, 3, 2];
function getRandomArray(length, min, max){
    let arr = [];
    for(let i = 0; i<length; i++){
        arr.push(Math.round(Math.random()*(max-min)+min));
    }
    return arr;
}
console.log(getRandomArray(7,5,31))

// function getModa(...numbers){
//     return numbers.map()
// }

function getAverage(...numbers){
    
    let average = numbers.reduce((sum,current) => sum + current/numbers.length, 0);
    let result = parseFloat(average.toFixed(2))
    return result;
}
console.log(getAverage(...arrayOfNumbers))


function getMedian(...numbers){
    
    numbers.sort((a, b) => a - b);
    if(numbers % 2 == 0){
        let index1 = numbers.length / 2;
        let index2 = index1 - 1;
        return (numbers[index1]+numbers[index2])/2;
    }
    else{
        return numbers[Math.floor(numbers.length/2)];
    }
}
console.log(getMedian(...arrayOfNumbers))

function filterEvenNumbers(...numbers){
    return numbers.filter(number => number % 2 !== 0)
}
console.log(filterEvenNumbers(...arrayOfNumbers))

function countPositiveNumbers(...numbers){
    return numbers.filter(number => number > 0).length
}
console.log(countPositiveNumbers(...arrayOfNumbers))

function getDividedByFive(...numbers){
    return numbers.filter(number => number % 5 == 0)
}
console.log(getDividedByFive(...arrayOfNumbers))


function replaceBadWords(string){}
  


function divideByThree(word){
    let array = [];
    for(let i = 0; i < word.length/3; i++){
        array.push(word.slice(i*3, (i+1)*3));
    }
    return array;
}
console.log(divideByThree("Commander"))

function generateCombinations(word){}