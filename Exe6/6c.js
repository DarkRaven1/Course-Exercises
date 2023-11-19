let day = 18;
let Name = 'Ali';
if(day <= 24 && day >= 0){
  if(day >= 6 && day <= 12){
    console.log(`Good morning ${Name}`);
  } else if(day >= 13 && day <= 17){
    console.log(`Good afternoon ${Name}`);
  } else{
    console.log(`Good night ${Name}`);
  }
} else{
  console.log('Input is wrong.');
}