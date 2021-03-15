var student = [
    { "rollno": 101, "name": "Amal", "sub1": 70, "sub2": 80, "sub3": 75, "sub4": 50, "sub5": 55 },
    { "rollno": 102, "name": "Ajay", "sub1": 60, "sub2": 85, "sub3": 65, "sub4": 70, "sub5": 65 },
    { "rollno": 103, "name": "Anuj", "sub1": 80, "sub2": 50, "sub3": 85, "sub4": 90, "sub5": 75 },
    { "rollno": 104, "name": "Arun", "sub1": 90, "sub2": 70, "sub3": 95, "sub4": 80, "sub5": 85 },
    { "rollno": 105, "name": "Balu", "sub1": 60, "sub2": 90, "sub3": 65, "sub4": 70, "sub5": 95 }]

function calc(avg) {
    console.log(avg);
    var grade;
    if ((avg > 90) && (avg < 100)) {
        grade = 'A';
    }
    else if ((avg > 80) && (avg < 89)) {
        grade = 'B';
    }
    else if ((avg > 70) && (avg < 79)) {
        grade = 'C';

    }
    else {
        grade = 'F';
    }
    return grade;
}
var res = student.map(ob => ob["avg"] = (ob.sub1 + ob.sub2 + ob.sub3 + ob.sub4 + ob.sub5) / 5);
student.map(ob1 => ob1["grade"] = calc(ob1.avg));
console.log(student);
