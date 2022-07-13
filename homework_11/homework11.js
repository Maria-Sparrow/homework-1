function getRandomChinese(length) {
  return new Promise((resolve, reject) => {
    let result = [];
    for (let i = 0; i < length; i++) {
      setTimeout(() => {
        let date = Date.now();
        let number = date % 100000;
        let char = String.fromCharCode(number);
        result.push(char);
        if(i==length-1){
            resolve(result);
        }
      }, (i+1)*50);
    };
  });
}

getRandomChinese(5).then(
  (result) => {
    console.log("Result: " + result); 
  });