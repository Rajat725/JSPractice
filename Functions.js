// 1. Normal Function in JS
function add(a,b)
{

    return a+b;

}
console.log(add(5,6));

//2.Function with no name
const sub=function(a,b){

    return a-b;
}
const e1=sub(5,3);
console.log(e1);


//3. Arrow Functions
const mult=(a,b)=>{
    return a*b;
};
const e2=mult(3,2);
console.log(e2);

//4.Function Constructor 
const mult2=new Function('a','b','return a*b');
console.log(mult2(3,4));

//5.Immediate Function Invoke :
((x)=> console.log(`${x}`))("Hello");
((x)=>console.log(x))("20");

//6.Generator Function
function* generator()
{
yield 1;
yield 2;
yield 3;
}
const gen=generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//7.Call bcak function
let nam=["Raj","Aksh","Ruchi"];
const nnam=nam.map(function(e){return e+" Sharma"});
console.log(nnam);

//8.Recursive Function
function factorial (n) {

    if(n==0 || n==1)
    {
        return 1;
    }
    else{

        return n*factorial(n-1);

    }

}
console.log(factorial(5));

//9. High Order Function

function adz(a,b){
    return a+b;
}

function operate(adz,a,b)
{

    return adz(a,b);
}
console.log(operate(adz,9,10));