
// console.log('world');
const price = 300;
if(price >=500){
  const discount = price * 10/100;
 const payAmount = price - discount;
 console.log(payAmount);
} else if(price > 200){
  const discount = price * 5/100;
  const payAmount = price - discount;
  console.log(payAmount);
}
else {
    console.log(price);
}