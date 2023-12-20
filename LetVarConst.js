// var -- Used in old versions 1.Redeclared 2.Global+Fx Level Scope 3.Non-initial
 var nam="Rajat";
console.log(nam);
var type;
console.log(type);
var animal;
animal="Cheetah";
console.log(animal); 
function god()
{
    console.log(animal);
    var city="Kashi";
    console.log(city);

}
god();
var human="Akshay";
var human="Akshay2";
console.log(human);
//console.log(city); will give error here
//let keyword ** Block Level scope 2.initailse 
let insect;
console.log(insect);
insect="Bug";
function insectFinder()
{
    console.log(insect);
    let n="Nig";
    
}
insectFinder();
let zoo="Rohtak"; zoo="Canada";
console.log(zoo);

//console.log(n);

//Const keyword must be initialze can't be redeclare or updated
const country="Canada";
//country="sa";
//Hoist
console.log(x);
var x=5;
console.log(x);
//console.log(y);
let y=100;
//console.log(y);



