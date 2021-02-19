
//method overriding// same singature parent and child using super function


class Parent{
    phone(){
        console.log("have a nokia phone")
    }
}
class Child extends Parent{
    phone(){
       super.phone()
        console.log("i phone")
    }
}

var obj=new Child()
obj.phone()