
// silder. 
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


//copy to clipboard
function selectText() {
  const input = document.getElementById('display');
  input.focus();
  input.select();
  document.execCommand('copy')
}
