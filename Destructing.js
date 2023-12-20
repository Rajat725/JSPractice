//Assigning the value using Destructuring in javascript
//1.Arrays Methods
let num=[1,2,3,4,5,6,7,8,9];
let [a,b,c,d,e,f,g,h,i]=num;
console.log(a,b,c,d,e,f,g,h,i);
//2.Replace values
let m=20;
let n=10;
[m,n]=[n,m];
console.log(m,n);
//3.Replace values using Object
const ob={

    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main Street',
    age: 21

};
console.log(ob);
//let {firstName:f1,lastName:l1,address:a1,age:ag1}=ob;
let {firstName,lastName,address,age}=ob;
console.log(firstName,lastName,address,age);
//console.log(f1,l1,a1,ag1);
function printUserName({firstName,lastName,address,age})
{

    console.log(firstName,lastName,address,age);
}
printUserName(ob);

