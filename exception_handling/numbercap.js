function numberCapcha(){
data= document.querySelector("#ab").value
// console.log(data);

try{
if(isNaN(num1)){     //{(data<5)
throw new Error("not a number");//("less than 5")

}

   else  if(data>10){
    throw new Error("greater than 10");
}
}
catch(er){
    alert(er.message)
}


}
