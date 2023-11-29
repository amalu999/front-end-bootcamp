function fibonacciGenerator (n) {
    var out=[];
    for(var i=0;i<n;i++){
        if(i==0){
            out.push(0);
            
        }
        else if(i==1){
            out.push(1);
            

        }
        else{
            var add= out[i-1]+out[i-2];
            out.push(add)
           
        }
        
    }
    return out;
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    
    
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

var res=fibonacciGenerator(3);
console.log(res)

var housekeeper={
    name:"aleena",
    age:23,
    years:4
};
console.log(housekeeper.age)