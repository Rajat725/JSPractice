function print()
{

    console.log("HI");
}


function print(namz)
{
    console.log(namz);
}

print("Lol");
print();

function mo(name,age)
{
    if(typeof name==="string" && typeof age==="number")
    {
        console.log(`${name} ${age}`);
    }
    else if(typeof name==="string"){
        console.log(`${name} `);

    }
    else
    {
        console.log("Invalid Input")
    }
   

}
mo("Rajat",18);
mo("Akshay");
mo();