class Shape{
    calculateArea(){
        console.log("The base class calculateArea method")
    }
}
class Rectangle extends Shape{

     constructor(height,width){
        super();
        this.height= height;
        this.width = width;

     }
     calculateArea(){

        console.log("Area of Rectangle is " + this.height*this.width);
     }

}
class Triangle extends Shape{
    constructor(base,height){
        super();
        this.base= base;
        this.height = height;

     }

     calculateArea(){

        console.log("Area of Triangle is " + (this.base*this.height)/2);
     }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius= radius;
        

     }

     calculateArea(){

        console.log("Area of circle is " + Math.PI*this.radius*this.radius);
     }
}

let rectangle = new Rectangle(10,20);
rectangle.calculateArea();

let triangle = new Triangle(10,20);
triangle.calculateArea();

let circle = new Circle(20);
circle.calculateArea();

