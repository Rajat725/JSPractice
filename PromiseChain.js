const flag1 = true;
const flag2 = true;
const flag3 = false;

function preet(flag) {
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve("success");
    } else {
      reject(" failure ");
    }
  });
}
console.log(preet(flag1));


preet(flag1)
  .then((result) => {
    console.log("Result is " + result);
    return preet(flag2);
  })
  .then((result2) => {
    console.log("Result2 is " + result2);
    return preet(flag3);
  })
  .then((result3) => {
    console.log("Result3 is " + result3);
  })
  .catch((err) => {
    console.error(err);
  });

  //Result of 1 depend on others