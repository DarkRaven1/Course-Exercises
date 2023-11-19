function convertTemperature(degrees, unit){
  if(unit === 'C')
    console.log(convertToFahrenheit(degrees) + 'F');
  else if(unit === 'F')
    console.log(convertToCelsius(degrees) + 'C');
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function convertToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

convertTemperature(25, 'C');