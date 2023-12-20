// For Loops
const browsers=["Edge","Chrome","FireFox","Safari","Brave"];
for(let i=0;i<browsers.length;i++)
{

    console.log(browsers[i]);

}
console.log("----------------------------------");
//while loop
let j=0;
while(j<browsers.length)
{
    console.log(browsers[j]);
    j++;
}
console.log("------------------------------------");
//Print array
console.log(browsers,typeof(browsers));
console.log("***************************************");
//for of loop
for(const e of browsers)
{
    console.log(e);
console.log(browsers[e]);

}
console.log("-***********************************");
//for in loop
for(const key in browsers)
{
console.log(key);
    console.log(browsers[key]);
}
//Objects Creation
const employee={

    "Name":"Rajat",
    "Age":"26",
    "Salary":"25000"

}
for(const key in employee)
{
    console.log(key+" :: "+employee[key]);
}

console.log("****************************************************");