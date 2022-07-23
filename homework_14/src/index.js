console.log("dobrij den', everybody!")

import {getRandomArray} from "./hw-5/homework5.js";
import {getBestStudent} from "./hw-6/homework6.js";
import {getMyTaxes} from "./hw-7/homework7.js";
import {Student} from "./hw-8/homework8.js";
console.log(getMyTaxes.call(latvia,1586))
console.log(getBestStudent(students))
console.log(getRandomArray(5,7,12))

const student = new Student(
    "LPNU",
    3,
    "Maria Sapiy",
    [4,5,5,4]
);
console.log(student.getInfo());

import {createIdGenerator} from "./hw-13/homework13.js";
let result = createIdGenerator();
console.log(result.next().value);

import {getMaxDigit,powNum,toUpperCaseFirstLetter,amountAfterTax,getRandomNumber,getRandomPassword,} from "./hw-function/homework3.js";

console.log(document.writeln(`
1. Найбільша цифра у числі 45678: ${getMaxDigit(45678)}; 
2. Число 6 в степені 5 буде: ${powNum(6,5)};
3. З великої літери dRJRfft: ${toUpperCaseFirstLetter('dRJRfft')} ;
4. Сума числа 1000 після 19.5% податку буде: ${amountAfterTax(1000)};
5. Випадкове ціле число в діапазоні від 6 до 38 буде: ${getRandomNumber(6,38)};
6. Випадковий пароль з 6 значень: ${getRandomPassword(6)};  `))


