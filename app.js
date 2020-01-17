
//generate a password function
function passwordGenerator () {

// Length of the password?
var passwordLength = document.getElementById('slider1').value;


// characters options for PW
const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";


// defining password

var password = "";


// creating a loop to choose password

for (var i = 1; i <= passwordLength; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
}
  
// adding the password to the content area
document.getElementById('display').value = password;
}

// adjust value when moving slider
// function sliderMove(){
//  document.getElementById('num').value = document.getElementById('slider1').value;
//  document.getElementById('num').textContent = document.getElementById('num').value;
// }
function sliderMove() {
  document.getElementById('num').textContent = document.getElementById('slider1').value;
}

//copy to clipboard
function selectText() {
  const input = document.getElementById('display');
  input.focus();
  input.select();
  document.execCommand('copy')
}


