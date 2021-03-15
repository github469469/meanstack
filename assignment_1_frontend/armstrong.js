num1=153
temp=num1
sum=0
while(num1>0){
    rem=num1%10
    sum+=rem**3
    num1=Math.floor(num1/10)
}
if(sum==temp){
    console.log("ARMSTRONG");
}
else{
    console.log("NOT ARMSTRONG");
}