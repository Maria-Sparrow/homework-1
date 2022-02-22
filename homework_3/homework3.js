const getMaxDigit = (num) => {
    if(num == 0){
         return 0;
    }
    else{
      return Math.max(num%10, getMaxDigit(Math.floor(num/10)));
    }
}

const powNum = (num, pow) => {
    let c = num;
    let f = 1;

    while (f < pow) {
        c *=num;
        f+=1;
    }
    return c;
}

const toUpperCaseFirstLetter = (str) => {

    return str.charAt(0).toUpperCase () + str.slice(1).toLowerCase();
  
}

const amountAfterTax = (sum) => {
    let amount = (sum*19.5)/100;
    let amount_after_tax = sum - amount;

    return amount_after_tax
}
// const convertCurrency = (money) => {
//     if (money == /^\d+[^.]\$$/) {
//         let sum = money * 25 
//         return sum + "uah"
//     }
// }
const getRandomNumber = (N, M) => {
    random_number = Math.round(Math.random()*(N - M) + M)
    return random_number
}

const getRandomPassword = (counter) => {
    let length = counter,
	charset = "0123456789";
	res = '';
    i = 0
    counter = charset.length;
    while (i<length) {
        i+=1
        res += charset.charAt(Math.floor(Math.random() * counter));
    }		
	return res;
}

// const deleteLetters = (delete_leter, string) =>{
//     let string = string.replace(/[delete_leter]/);


// }

document.writeln(`
1. Найбільша цифра у числі 45678: ${getMaxDigit(45678)}; 
2. Число 6 в степені 5 буде: ${powNum(6,5)};
3. З великої літери dRJRfft: ${toUpperCaseFirstLetter('dRJRfft')} ;
4. Сума числа 1000 після 19.5% податку буде: ${amountAfterTax(1000)};
5. Випадкове ціле число в діапазоні від 6 до 38 буде: ${getRandomNumber(6,38)};
6. Випадковий пароль з 6 значень: ${getRandomPassword(6)};  `)
 
