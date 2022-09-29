//Bad button functions
var lvlOne = 0,
    countOne = document.getElementById('x1');

document.getElementById('plus1').addEventListener('click', function () {
  countOne.textContent = lvlOne+=1;
  colourChangeOne(lvlOne);
});
document.getElementById('minus1').addEventListener('click',function () {
    if(lvlOne > 0) {
      countOne.textContent = lvlOne-=1;
    }
  colourChangeOne(lvlOne);
});
function colourChangeOne(val) {
  var colourOne = "green";
  if(val > 0) {
    colourOne="red";
  } 
  countOne.style.color = colourOne;
}

//Fats buttons
var lvlTwo = 0;
var countTwo = document.getElementById('x2');

document.getElementById('plus2').addEventListener('click', function () {
  countTwo.textContent = lvlTwo+=1;
  colourChangeTwo(lvlTwo);
});
document.getElementById('minus2').addEventListener('click',function () {
    if(lvlTwo > 0) {
      countTwo.textContent = lvlTwo-=1;
    }
  colourChangeTwo(lvlTwo);
});
function colourChangeTwo(val){
  var colourTwo = "black";
  if (val == 1) {
    colourTwo = "green";
  } else if (val > 1) {
    colourTwo = "red";
  }
  countTwo.style.color = colourTwo;
}

//Protein buttons
var lvlThree = 0;
var countThree = document.getElementById('x3');

document.getElementById('plus3').addEventListener('click', function () {
  countThree.textContent = lvlThree+=1;
  colourChangeThree(lvlThree);
});
document.getElementById('minus3').addEventListener('click',function () {
    if(lvlThree > 0) {
      countThree.textContent = lvlThree-=1;
    }
  colourChangeThree(lvlThree);
});
function colourChangeThree(val) {
  var colourThree = "black";
  if(val == 2) {
    colourThree = "green";
  } else if (val > 2) {
    colourThree = "red";
  }
  countThree.style.color = colourThree;
}

//Milk buttons
var lvlFour = 0;
var countFour = document.getElementById('x4');

document.getElementById('plus4').addEventListener('click', function () {
  countFour.textContent = lvlFour+=1;
  colourChangeFour(lvlFour);
});
document.getElementById('minus4').addEventListener('click',function () {
    if(lvlFour > 0) {
      countFour.textContent = lvlFour-=1;
    }
  colourChangeFour(lvlFour);
});
function colourChangeFour(val){
  var colourFour = "black";
  if (val == 3) {
    colourFour = "green";
  } else if(val>3){
    colourFour = "red"; 
  }
  countFour.style.color = colourFour;
}

//Carbs buttons
var lvlFive = 0;
var countFive = document.getElementById('x5');

document.getElementById('plus5').addEventListener('click', function () {
  countFive.textContent = lvlFive+=1;
  colorChangeFive(lvlFive);
});
document.getElementById('minus5').addEventListener('click',function () {
    if(lvlFive > 0) {
      countFive.textContent = lvlFive-=1;
    }
  colorChangeFive(lvlFive);
});
function colorChangeFive(val) {
  var colourFive = "black";
  if (val >= 3 && val <= 5) {
    colourFive = "green";
  } else if (val > 5) {
    colourFive = "red";
  }
  countFive.style.color = colourFive;
}

//Veg buttons
var lvlSix = 0;
var countSix = document.getElementById('x6');

document.getElementById('plus6').addEventListener('click', function () {
  countSix.textContent = lvlSix+=1;
  colorChangeSix(lvlSix);
});
document.getElementById('minus6').addEventListener('click',function () {
    if(lvlSix > 0) {
      countSix.textContent = lvlSix-=1;
      colorChangeSix(lvlSix);
    }
});
function colorChangeSix(val) {
  var colourSix = "black";
  if(val >= 5 && val <= 7){
    colourSix = "green";
  } else if(val > 7) {
    colourSix = "red";
  } 
  countSix.style.color = colourSix;
}
