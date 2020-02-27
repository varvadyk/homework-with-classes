class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.dismiss = false;
    }

    getInfo() {
        return this.university + " " + this.course + " " + this.fullName;
    }

    get marksStudent() {
        if (this.dismiss) {
            return null;
        } else {
            return this.marks;
        }
    }
    set marksStudent(value) {
        this.marks.push(value);
    }

    getAverageMark() {
        const average = this.marks.reduce((sum, element) => {
            return (sum += element);
        }, 0);
        return (average / this.marks.length).toFixed(1);
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
document.writeln(`<p>All array :  ${object.marksStudent}</p>`);
object.marksStudent = 5;
document.writeln(`<p>Array after add mark:  ${object.marksStudent}</p>`);
document.writeln(`<p>Average student score:  ${object.getAverageMark()}</p>`);
object.dismissStudent();
document.writeln(`<p>Exclude the students:  ${object.marksStudent}</p>`);
object.recoverStudent();
document.writeln(
    `<p> Allow to restore the student:  ${object.marksStudent}</p>`
);

class BudgetStudent extends Student {
    constructor(info) {
        super();
        info = this.getScholarship();
        this.interval;
    }
    getScholarship() {
        if (this.getAverageMark() >= 4.0 && this.dismiss == false) {
            console.log("You received 1400 UAH. scholarships ");
        } else {
            console.log("Sorry,you don't have scholarships ");
        }
    }
    interval = setInterval(() => this.getScholarship(), 30000);
}
let student = new BudgetStudent("Polytechnic College", 5, " Anton Mrychak");
document.writeln(`<p> Avarage mark student :  ${student.getAverageMark()}</p>`);