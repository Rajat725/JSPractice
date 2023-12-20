function xmas() {
  return new Promise((resolve,reject) => {
    setTimeout(() => resolve("Resolve is available"),3000);
  });
}

function xmas1() {
    return new Promise((resolve,reject) => {
      setTimeout(() => reject("Reject is available"),1000);
    });
  }

//Promise Race condition
  Promise.race([xmas(), xmas1()]).then((data) => {console.log(data);})
  .catch((err) => {console.log(err);});
//Promise All Conditions
Promise.all([xmas(), xmas1()])
.then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log("An error occurred:", err);
  });
//Promise all settled promise
Promise.allSettled([xmas(),xmas1()]).then(results=>results.forEach(result=>{

if(result.status==='fulfilled')
{
    console.log(result);
}
else{
    console.log(result)
}

}));