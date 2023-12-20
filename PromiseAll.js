function love() {
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
        console.log("Hi I am in First 1000");
        resolve("1000");
        
      }, 1000);

  });
}

function love2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Hi I am in Second 2000");
        resolve("2000");
      }, 2000);
    });
  }

  function love3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Hi I am in Third 3000");
        resolve("3000");
      }, 3000);
    });
  }

 /* love().then((dat1)=>{
    console.log(dat1);
    love2()}
    ).then((dat3)=>{
        console.log(dat3)
        love3()});*/
  
  
  //Promise Chaining
  Promise.all([love(),love2(),love3()])
  .then((data)=>console.log(data));
  ;//Promise All

  