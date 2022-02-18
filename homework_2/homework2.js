const N = +prompt("Введіть число N");
const M = +prompt("Введіть число M");
let counter = 0;
let recived = '';
if (N && M && M>N){
    recived = confirm('Чи пропускати парні числа?') 
}
else {
    alert("N і M мають бути цілими числами і N<M")
}

if (recived){
    for(let i=N; i<=M; i++){
        if (i%2!==0){
            counter+=i;
        }
    }alert(counter)
}
else {
    for(let i=N; i<=M; i++){
        counter+=i;
    }
}alert(counter)