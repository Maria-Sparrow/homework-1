let students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана", "Максим", "Марія"];

let themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних", "Алгоритми"];

let marks = [4, 5, 5, 3, 4, 5, 4, 5];

let boysAndGirls = pairsStudents(students);
let studentsAndThemes = workOnTheProject(boysAndGirls,themes)
let studentAndMark = evaluateStudent(students,marks)
let studentsAndRandomMarks = randomMark(studentsAndThemes)
function pairsStudents(mas){

    let boys = [];
    let girls = [];
   
    for(let i = 0; i<mas.length; i++){
        if (mas[i].endsWith("а")|| mas[i].endsWith("я")){
            girls.push(mas[i]);
        }
        else{
            boys.push(mas[i]);
        }
    }

    let pairsOfStudents = [];
    for(let j=0; j<boys.length; j++){
        pairsOfStudents.push([boys[j], girls[j]]);
    }
    return pairsOfStudents;

}
console.log(boysAndGirls);


function workOnTheProject(mas,subjects){
    let pairsAndSubjects = [];
    for(let i =0; i < subjects.length; i++){
        let [boys, girls] = mas[i];
        pairsAndSubjects.push([boys + " і " + girls, subjects[i]]);
    }
    return pairsAndSubjects;
}

console.log(studentsAndThemes)

function evaluateStudent(arr,mark){
    studentsAndMarks = [];
    for(let i = 0; i <arr.length; i++){
        studentsAndMarks.push([arr[i], mark[i]])
    }
    return studentsAndMarks;
}

console.log(studentAndMark)

function randomMark(studentsAndThemes){
    pairsWithRandomMarks = [];
    for(let i = 0; i<studentsAndThemes.length; i++){
        let randomMarks = Math.ceil(Math.random() *(5 - 1) + 1)
        pairsWithRandomMarks.push(studentsAndThemes[i], randomMarks)
    }
    return pairsWithRandomMarks;

}
console.log(studentsAndRandomMarks)