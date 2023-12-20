//Simple Objects
 let person = {name: "John", age: 30, city: "New York"};
 console.log(person);
 console.log(person.name);
 console.log(person.city);
 console.log(person.age);

 //2.Object creation

 function Cars(brand,model)
 {
    this.brand=brand;
    this.model=model;


 }

    let m1=new Cars("Totutoa","2015");
    console.log(m1.brand);
    console.log(m1.model);

    //3.Class usage
    class Person{
        constructor(name){
            this.name=name;
        }

        disp()
        {
            return `Hello ${this.name}`;
        }

    }

    let person1=new Person("Rajat");
    console.log(person1.name);
    console.log(person1.disp());
    console.log(typeof Person);
    console.log(typeof person1);


 