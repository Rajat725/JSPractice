let num=[3,9,8,1,4,7,5];
//Filter Method
//let num2=num.filter((el)=>el%2===0);
//console.log(num2);
//console.log(num);
/*let num3=num.filter((value,indez,array)=>{
    if(value>5)
    {
        console.log(value);
        console.log(indez);
        console.log(array[indez]);
        console.log("*****************");
       
    }
});
console.log(num3);*/
//Map Method
//let num5=num.map((el)=>el*2);
//console.log(num5);
//Reduce Method
//let num6=num.reduce((acc,el)=>acc+el,0);
//console.log(num6);
let num7=num.reduce((max,el)=>
{

    if(max<el)
    {

        return el;
    }
    else
    {

        return max;
    }

},num[0]);
console.log(num7);