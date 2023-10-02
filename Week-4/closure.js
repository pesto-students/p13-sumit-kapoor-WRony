function counter(){
    var count = 0;
    
     function increment(){
        count++;
        return count;
    }
    
    return increment;
}

let firstCounter =  counter();
let secondCounter = counter();

let firstValues = [];
let secondValues =[];

for(let i=0; i<5;i++){
    firstValues.push(firstCounter());
}
for(let j=0; j<3;j++){
    secondValues.push(secondCounter());
}
console.log(firstValues);
console.log(secondValues);