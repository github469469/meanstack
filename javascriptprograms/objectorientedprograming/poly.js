// method overloading
// method overriding

class Maths{
    add(num){
        console.log("inside singl parn method");

    }

add(num1,num2){
    console.log("inside two arg method");
    
}

add(num1,num2,num3){
    console.log("inside 3 arg method");
    
}
}
var math=new Maths();
math.add(10,20,30)
math.add(10,20)
math.add(10)



//constructor
//inheritance
//polymorphism


