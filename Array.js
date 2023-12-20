let cars=["Honda","BMW","BEnz","Toyota","Mercedes"];
console.log(cars);
//1.Pop function
//let el=cars.pop();
//console.log(el,cars);
//2.Push
//let el1=cars.push("Ferrari");
//console.log(el1,cars);
//3.Shift
//let el2=cars.shift();
//console.log(el2,cars);
//4.Unshift
//let el3=cars.unshift("Madza");
//console.log(el3,cars);
//5.splice
//let el4=cars.splice(2,3,"Benz","Lol");
//console.log(el4,cars);
//6.Slice
//let newcar=cars.slice(2,4);
//console.log(cars,newcar);
//7.concat
//let ncard=["Lambo"];
//console.log(cars.concat(ncard));
//8.index of
//let el5=cars.indexOf("BMW");
//console.log(el5);
//9.includes
//let el6=cars.includes("BMW","LOL");
//console.log(el6);
//10.For each
//cars.forEach((el)=>{console.log(el)});
//11.Sort
//let el7=cars.sort();
//console.log(cars,el7);
//12. Dleete
//delete cars[0];
//console.log(cars);
//cars.reverse();
//console.log(cars);
//console.log(cars.join(":: "))
cars.sort((a,b)=>a-b);
console.log(cars);