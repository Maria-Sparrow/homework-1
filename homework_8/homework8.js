class Student{
    deleteStudent=false;

    constructor(university, course, fullName,marks) {
        this.university=university;
        this.course=course;
        this.fullName=fullName;
        this.marks=marks;
        
    }
    getInfo() {
        console.log(
          `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`
        );
      }

    get getMarks(){
        if(this.deleteStudent){
            return null;
        }
        else{
            return this.marks;
        }
    }

    set setMarks(mark){
        if(this.deleteStudent){
            return;
        }
        this.marks.push(mark);
    }

    getAverageMark(){
        let averageMark=0;
        averageMark = this.marks.reduce((sum, curr)=> sum + curr, 0)/this.marks.length;
        return averageMark;
        
    }

    dismiss(){
        this.deleteStudent = true;
        console.log("Виключено")
    }

    recover(){
        this.deleteStudent=false;
        console.log("Поновлено")
    }
}

const newStudent = new Student("ЛПНУ",3,"Сапій Марія",[5,4,5,5,4]);
// console.log(newStudent)
// newStudent.getInfo();
// console.log(newStudent.getMarks);
// console.log((newStudent.setMarks = 4));
// console.log(newStudent.getMarks);
// console.log("Середня оцінка:", newStudent.getAverageMark());
// newStudent.dismiss();
// console.log(newStudent);
// console.log(newStudent.getMarks);
// console.log((newStudent.setMarks = 5));
// console.log(newStudent.getMarks);
// newStudent.recover();
// console.log(newStudent);
// console.log(newStudent.getMarks);
// console.log((newStudent.setMarks = 3));
// console.log(newStudent.getMarks);

class BudgetStudent extends Student {
    constructor(university, course, fullName,marks,scholarship) {
        super(university, course, fullName,marks)
        this.scholarship=scholarship;  
    }

    getScholarship(){
        if(this.deleteStudent==false && this.getAverageMark()>=4){
                console.log("Ви отримали 1400 грн. стипендії")
            
            return;
        }
        else if(this.deleteStudent==false && this.getAverageMark()<4){
            console.log("Ваш середній бал не доволяє отримати стипенію.");
        }
        else{
            console.log("Студента виключено!")
        }
    };
};

const newBudgetStudent = new BudgetStudent("ЛПНУ",3,"Сапій Марія",[3,4,3,3,3], 1400)
console.log(newBudgetStudent)
newBudgetStudent.getScholarship();
console.log(newBudgetStudent.getAverageMark());