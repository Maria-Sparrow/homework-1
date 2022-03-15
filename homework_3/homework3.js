const getMaxDigit = (num) => {
    if(num == 0){
         return 0;
    }
    else{
      return Math.max(num%10, getMaxDigit(Math.floor(num/10)));
    }
}

const powNum = (num, pow) => {
    let f = 1;
    for (let i = 0; i<pow; i++){
    	f*=num
    }
    return f;
}

const toUpperCaseFirstLetter = (str) => {

    return str.charAt(0).toUpperCase () + str.slice(1).toLowerCase();
  
}

const amountAfterTax = (sum) => {
    let amount = (sum*19.5)/100;
    let amount_after_tax = sum - amount;

    return amount_after_tax
}

const getRandomNumber = (N, M) => {
    let random_number = Math.round(Math.random()*(N - M) + M)
    return random_number
}

const getRandomPassword = (counter = 8) => {
  let res = "";
  for (let i = 0; i < counter; i++) {
    res += Math.floor(Math.random() * 9);
  }
  return res;
};


document.writeln(`
1. Найбільша цифра у числі 45678: ${getMaxDigit(45678)}; 
2. Число 6 в степені 5 буде: ${powNum(6,5)};
3. З великої літери dRJRfft: ${toUpperCaseFirstLetter('dRJRfft')} ;
4. Сума числа 1000 після 19.5% податку буде: ${amountAfterTax(1000)};
5. Випадкове ціле число в діапазоні від 6 до 38 буде: ${getRandomNumber(6,38)};
6. Випадковий пароль з 6 значень: ${getRandomPassword(6)};  `)
 
