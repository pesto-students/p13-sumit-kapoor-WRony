const person = {
    name:"",
    email:"",
    age:0,

    getAge:function(){
        return this.age;
    },
    setAge: function(value){
        this.age =value;
    }
}

Object.defineProperty(person,"name",{
    value: "John",
    writable: false,
    enumerable: true,
  });
  Object.defineProperty(person,"email",{
    value: "abc@gmail.com",
    writable: false,
    enumerable: true,
  });
  Object.defineProperty(person,"age",{
    value: "40",
    writable: true,
    enumerable: true,
  });