class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marksArray = [5, 4, 4, 5];
        this.dismiss = false;
    }

    getInfo() {
        return this.university + " " + this.course + " " + this.fullName;
    }

    get marks() {
        if (this.dismiss) {
            return null;
        } else {
            return this.marksArray;
        }
    }
    set marks(value) {
          if (this.dismiss) {
            return null;
        } else {
        this.marksArray.push(value);
    }

    getAverageMark() {
        const average = this.marksArray.reduce((sum, element) => {
            return (sum += element);
        }, 0);
        return (average / this.marksArray.length).toFixed(1);
    }
    dismissStudent() {
        this.dismiss = true;
    }
    recoverStudent() {
        this.dismiss = false;
    }
}
let object = new Student("KHU Distance Learning", 4, "Diana Varvadiuk");
document.writeln(
    `<p>Information about the course, school and student's name :  ${object.getInfo()}</p>`
);
document.writeln(`<p>All array :  ${object.marks}</p>`);
object.marks = 5;
document.writeln(`<p>Array after add mark:  ${object.marks}</p>`);
document.writeln(`<p>Average student score:  ${object.getAverageMark()}</p>`);
object.recoverStudent();
document.writeln(
    `<p> Allow to restore the student:  ${object.marks}</p>`
);

class BudgetStudent extends Student {
    constructor(info) {
        super();
        info = this.getScholarship();
        this.interval;

    }
    getScholarship() {
        const averageMark = 4.0;
        if (this.getAverageMark() >= averageMark && this.dismiss == false) {
            console.log("You received 1400 UAH. scholarships ");
        } else {
            console.log("Sorry,you don't have scholarships ");
        }
    }
    interval = setInterval(() => this.getScholarship(), 30000);
}
let student = new BudgetStudent("Polytechnic College", 5, " Anton Mrychak");
document.writeln(`<p> Avarage mark student :  ${student.getAverageMark()}</p>`);
