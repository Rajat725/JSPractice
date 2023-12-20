//Callback Fucntions
function display(name,greetMessage)
{

    console.log("Hello "+name);
    greetMessage();

}
//Callback fx
function greet()
{
    console.log("Wlecome TO Happy CLub");
}
//run
display('John',greet);
display('Aksahy',greet);
console.log("********************");
setTimeout(display,3000,"Rajat",greet);//greet wait for display to execute
console.log("End");
