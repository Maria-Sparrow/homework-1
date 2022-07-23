const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary){
    return salary*this.tax;
}
console.log(getMyTaxes.call(latvia,1586))

function getMiddleTaxes(country){
    return this.tax*this.middleSalary;
}
console.log(getMiddleTaxes.call(latvia))

function getTotalTaxes(country){
    return this.tax*this.middleSalary*this.vacancies;
}
console.log(getTotalTaxes.call(latvia))

function getMySalary(country){

    setInterval(()=>{

    let randomSalary = (Math.random()*(2000-1500)+1500).toFixed();
    let justTax = randomSalary * this.tax;
    let generalProfit = randomSalary - justTax;
    let result = {
        salary: randomSalary,
        tax: justTax,
        profit: generalProfit
    };
    console.log(result)
}, 2000);   

};

console.log(getMySalary.call(ukraine))
