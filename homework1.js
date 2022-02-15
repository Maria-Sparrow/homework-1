const tv = 123.965;
const radio = 15.678;
const car = 90.2345;

console.log(Math.max(tv,radio,car)) //1
const max_price = 123.965;

console.log(Math.min(tv,radio,car)) //2
const min_price = 15.678;

const summa = 229.8775;
console.log(summa) //3 

console.log(Math.floor(tv) + Math.floor(radio) + Math.floor(car)) //4
const less_summa = 228;

console.log(Math.round(summa / 100 ) * 100) // 5 
// or console.log(summa.toFixed(2))
const to_hundreds = 200;

if (less_summa % 2 == 0) {
    console.log(true)
} 
else{
    console.log(false)
}                                      // 6

const boolean_answer = "true";

console.log(500 - summa) //7
const remainder_without_rounding = 270.1225;

const avarage = summa / 3
console.log(avarage.toFixed(2))  
const new_avarage = 76.63;  //8

const discount = Math.random()*(30 - 5) + 5 
console.log(discount) // 9

const random_discount = Math.random() * (78 - 24) + 24
console.log(random_discount.toFixed(2)) //10
const new_random_discount = 57.64;

const cost = summa / 2
const prosents = (random_discount * summa ) / 100
const profit =  cost - prosents
console.log(profit)  //11

console.log(`Максимальна ціна: ${max_price}; 
Мінімальна ціна: ${min_price}; 
Загальна сума: ${summa}; 
Сума заокруглена до меншого: ${less_summa}; 
Сума заокруглена до сотих: ${to_hundreds}; 
Чи парна сума: ${boolean_answer}; 
Залишок без округлення: ${remainder_without_rounding}; 
Середнє значення: ${new_avarage};
Випадкова знижка в межах від 5 до 30%: ${discount}; 
Випадкова знижка в межах від 24 до 78% з 2-а знаками після коми: ${new_random_discount}; 
Прибуток: ${profit}; `)
