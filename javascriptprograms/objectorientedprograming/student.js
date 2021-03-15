
// static function


class Student{
    static college="luminar"
constructor(rol,name,course){
        this.rol=rol;
        this.course=course;
        this.name=name;
    
}
printStudent(){
    console.log(this.rol+","+this.course+","+this.name+","+Student.college)
}


}
var stud=new Student(100,"ravi","bca")
stud.printStudent()

var stud1=new Student(101,"raj","bca")
stud1.printStudent()

// stud.printStudent("luminar")




