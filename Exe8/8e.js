function isSameProduct(product1, product2){
 if(product1.name === product2.name && product1.price === product2.price)
  return true;
else
  return false;
}

const product1 = {
  name : 'ali',
  price : 100
}
const product2 = {
  name : 'ali',
  price : 101
}


console.log(isSameProduct(product1, product2));
