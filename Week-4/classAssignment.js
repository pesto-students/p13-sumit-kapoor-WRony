class Person{
    
    constructor(Name,Age,Gender,Nationality){
        this.Name =Name;
        this.Age = Age;
        this.Gender=Gender;
        this.Nationality = Nationality;
        
    }
    
    introduce(){
        console.log(
            `My name is ${this.Name}, I am ${this.Age} years old, I am ${this.Gender}, and I am ${this.Nationality}`
            );
    }
}

class Student extends Person{
    
    
    constructor(Name,Age,Gender,Nationality,Subject){
        super(Name,Age,Gender,Nationality);
        this.Subject = Subject;
        
    }
    study(){
        super.introduce();
        console.log(`.I am studying ${this.Subject}`);
    }
}

const Person1= new Person("John",25,"male","American");
Person1.introduce();

const Person2= new Person("Jane",30,"female","Canadian");
Person2.introduce();

const Person3= new Person("Bob",20,"male","Australian");
Person3.introduce();

const Student1= new Student("Sarah",18,"female","British","Computer science");
Student1.study();




