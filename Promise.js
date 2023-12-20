

const flag=false;
let prmse=new Promise((resolve,reject)=>{

    if(flag)
    {

        resolve("Promise is resolved");
    }
    else
    {
 
        reject("promise is rejected");
    }


});
console.log(prmse);
prmse.then(()=>{console.log("Ys baby")}).catch(()=>{console.error("Erorr")});
