class Vehicle {

    constructor(make, model, year){
        this.make = make,
        this.model = model,
        this.year =  year
    }

    getDetails(){
       return this.make + " " + this.model + " " + this.year;
    }


}

class Car extends Vehicle{

    constructor(make,model,year,numDoors){
        super(make, model, year);
        this.numDoors = numDoors;
    }

    getDetails(){

        return "Make: " +this.make + " Model:" + this.model + " Year:" + this.year + " Door number:" + this.numDoors;
    }
}

const vehicle =  new Vehicle("Suzuki","Swift","2021");
console.log(vehicle.getDetails());


const car =  new Car("Suzuki","Swift","2021",4);
console.log(car.getDetails());