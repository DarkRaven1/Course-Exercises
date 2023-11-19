function buttonsFunction(buttonName){
  const button = document.querySelector(buttonName);
if (!button.classList.contains('is-toggled')) {
  button.classList.add('is-toggled');
} else {
  button.classList.remove('is-toggled');
}
console.log(buttonName);
}