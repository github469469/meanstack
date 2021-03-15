class Employee{
    constructor(id,name,desig,sal){
       this.id=id;
       this.name=name;
       this.desig=desig;
       this.sal=sal;


    }
}

var obj=new Employee(100,"ajay","developer",25000)
var obj1=new Employee(101,"ram","developer",26000)
var obj2=new Employee(102,"raj","qa",26000)
var obj3=new Employee(103,"ramu","qa",27000)
var employee=[]
employee.push(obj)
employee.push(obj1)
employee.push(obj2)
employee.push(obj3)
// for(let emp of employee){
//     if(emp.desig=="developer"){
//         console.log(emp)
//     }
// }
enames=employee.map(emp=>emp.name.toUpperCase())
console.log(enames)

employee.filter(emp=>emp.desig=="developer").forEach(o=>console.log(o.name))


data=employee.map(emp=>emp.sal).reduce((o1,o2)=>o1>o2?o1:o2)
console.log(data);

sort=employee.map(emp=>emp.sal).sort((o1,o2)=>o1>o2?-1:1)
console.log(sort)


employee.sort((emp1,emp2)=>emp1.sal>emp2.sal).forEach(o=>console.log(o.salary))





