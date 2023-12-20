//Single Param
const square=num=>num*num;
console.log(square(5));//25

//Manipulating Objects
let person={nam:"John",age:30,city:"New York"};
console.log(person.nam);
const details=(person)=>`HEllo ${person.nam} your details are ${person.age} ${person.city} `;
console.log(details(person));

//Default value param
let mul=(a=1,b=10)=>a*b;
console.log(mul(20,30));
console.log(mul());

//Varag
const z=(...numbers)=>numbers.reduce((acc,el)=>acc+el,0);
console.log(z(1,2,3,4,5));