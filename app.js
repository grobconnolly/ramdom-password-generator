
var slider = new Slider('#slider1',{
  tooltip: 'always'
});

//generate a password

function passwordGenerator () {

    // how long is the password going to be?
    var passwordLength = document.getElementById('slider1').value;

   
  // characters options for PW

  const values = "ABCDEFGHIJKLabcdefghikk0123456789!@#$%";

  
  // defining password
  var password = "";


// creating a loop to choose password

for (var i = 0; i <= passwordLength; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
}
  
// adding the password to the content area
document.getElementById('sliderValue').textContent = (passwordLength);

document.getElementById('display').value = password;

}

const copyToClipBoard = str => {
  const el = document.createElement('texarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

passwordGenerator(); // To start with a value


// //generate password

// function createPw () {

//   //length of pw
// var pwLength = document.getElementById('slider').value;

// //values to create a password
// const values = "abcdefPOIUTREW123456!@#";

// var password = '';


// // create loop to choose password 
// for(var i = 0; i <= pwLength; i++) {
//   password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
// }

// // add password to textbox

// document.getElementById('display').value = password;
// }