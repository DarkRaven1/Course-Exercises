function comparePrice(procuct1, product2){
  if(product1.price < product2.price)
    return product1;
  else
    return product2;
}

const product1 = {
  name : 'basketball',
  price : 2095
}
const product2 = {
  name : 'computer',
  price : 140000
}

console.log(comparePrice(product1,product2));