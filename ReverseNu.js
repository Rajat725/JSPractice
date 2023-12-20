//Reverse a number
function revers(numb) {
  if (numb >= 0 && numb <= 9) {
    return numb;
  }

  let rev = 0;
  while (numb != 0) {
    rev = (rev * 10) + (numb%10);
    numb = Math.floor(numb / 10);
  }
  return rev;
}
console.log(revers(123456789));
