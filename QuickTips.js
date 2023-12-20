//1.Remove Duplicate
const arr1=[1,2,2,3,3,4,5,6,7,7,7,7];
console.log(arr1);
const arr2=[...new Set(arr1)];
console.log(arr2);
//2.Int to String
const ian=20;
console.log(typeof String(ian));
//3.Float
const lo=20.353;
console.log(parseInt(lo));
//4.swap
let a=10;
let b=5;
[a,b]=[b,a];
console.log(a,b);
//5.Swap2
[a1,b1,c1]=[1,2,3];
console.log(a1,b1,c1);
//6.Creating object
let prsn={
    name:"Rk",
    age:28,
    }
if(prsn.hasOwnProperty("age")) 
{
    console.log("yes")
}
console.log(prsn['age']);//IMPT========================
//7.False value Remove
let n1=[,2,NaN,false,'',8,0,""];
console.log(n1.filter(Boolean));
//8.Maths Clas
let min=1;
let max=10;
console.log(Math.floor(Math.random()*(max-min+1))+min);
//9.Array to string
const l=['Hello','Bye'];
console.log(l.join("Rajat"));
//10.arr
const k=[1,2,2,3,3,4,5,6,7,8];
const dup=[...k];
console.log(dup);
//11.Copy Obj
const prsn2={...prsn};
console.log(prsn);
//12.object to array
const keys=Object.entries(prsn);
console.log(keys);
//13.Date
const d= new Date();
console.log(d.toLocaleString());
//14.Turncate array
const arr=[1,2,3,4,5,6,7,8,9,10];
arr.length=2;
console.log(arr);
//15.Last elemet of array
console.log(arr.slice(-1));