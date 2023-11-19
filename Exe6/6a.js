let day = 18;
if(day <= 24 && day >= 0){
  if(day >= 6 && day <= 12){
    console.log('Good morning');
  } else if(day >= 13 && day <= 17){
    console.log('Good afternoon');
  } else{
    console.log('Good night');
  }
} else{
  console.log('Input is wrong');
}