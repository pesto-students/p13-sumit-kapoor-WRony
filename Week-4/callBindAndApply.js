class Calculator{
    
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }
    add(){
        return this.num1 + this.num2;
    }
    
    subtract(){
        return this.num1 - this.num2;
    }
    multiply(){
        return this.num1*this.num2;
    }
    divide(){
        return this.num1*this.num2;
    }
}

class ScientificCalculator extends Calculator{
    
    constructor(num1,num2){
        super(num1,num2);
        this.multiplyByTwo = this.multiplyByTwo.bind(this);
        this.powerOfThree = this.powerOfThree.bind(this);
    }
    square(){
        return this.num1*this.num1;
    }
    cube(){
        return this.num1*this.num1*this.num1;
    }
    power(){
        return Math.pow(this.num1, this.num2);
    }
    multiplyByTwo() {
    return this.num1 * 2;
  }
  
  powerOfThree(){
      return Math.pow(this.num1,3);
  }
}


let arg={
    num1:10,num2:5
}

let calulatorObj = new Calculator(20,5);
let scientificCalculatorObj = new ScientificCalculator(20,5)
console.log(calulatorObj.add.call(arg));
console.log(calulatorObj.subtract.apply(arg));
console.log(scientificCalculatorObj.multiplyByTwo());
console.log(scientificCalculatorObj.powerOfThree());