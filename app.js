

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  

    while (0 !== currentIndex) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
     
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
var pwLength = prompt('how long would you like your password to be (pick a number beween 5 - 10)');

if (pwLength <= 4 ) {
    alert("Password too short")
} else if (pwLength >= 5 || pwLength <= 10) {
    alert("Great, your password will be " + pwLength + " characters long.")
}

array.length = pwLength;

    return array;
  }


var arr = ['a', 'b', 'c', 'd', 'e', 'D', 'T', 'L', 1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, '#', '!'];
arr = shuffle(arr);
console.log(arr);

// test agsin