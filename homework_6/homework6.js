const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  function getAverageMark(mark){
    let subject = Object.values(mark.subjects).flat();

    let summa = subject.reduce((sum, curr)=> sum + curr, 0);
    let average = (summa/subject.length).toFixed(2);
    return average;
    
}
console.log(getAverageMark(students[0]));

function getSubjects(objects){
    let subject = Object.keys(objects.subjects).map((item) => item.replace("_", " ").toUpperCase() );
    return subject;
}
console.log(getSubjects(students[0]));

function getStudentInfo(info){
    let studentInfo = {
        name: info.name,
        course: info.course,
        averageMark: getAverageMark(info),

    };

    return studentInfo;
}
console.log(getStudentInfo(students[1]))

function getStudentsNames(students){}

function getBestStudent(bestMark){
    let students = bestMark.map((item) =>({ name:item.name, mark:getAverageMark(item)}));
    let bestStudent = students[0];

    for (var i = 0; i < students.length; i++) {
        if(students[i].mark>bestStudent.mark){
            bestStudent=students[i];
        }
    }
    return bestStudent.name;
}
console.log(getBestStudent(students))

function calculateWordLetters(word){
    let calculateWord = {};
    for (let i of word) {
        calculateWord[i] = word.split(i).length - 1;
  }
    return calculateWord;
};
console.log(calculateWordLetters("текст"))



