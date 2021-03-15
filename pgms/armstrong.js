
sum=0
for(i=100;i<999;i++){
   arm(i) 
    
}
function arm(i){
    temp=i
    while(i>0){
        rem=i%10
        sum+=rem**3
        i=Math.floor(i/10)
        
        }

if(sum==temp){
    console.log(sum);
    sum=0;
}
else{
    sum=0;
}
}


