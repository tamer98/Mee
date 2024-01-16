

var numCards = document.querySelectorAll(".card").length;
var cards = document.querySelectorAll(".card");
var twice = new Array(17).fill(0);


//front
for (let i = 0; i < numCards; i++) {
  cards[i].classList.add("front");
}


//back
for (let i = 0; i < numCards; i++) {
  var randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 16) + 1;
  } while (twice[randomNumber] === 2);
    
  twice[randomNumber]+=1;

  var randomImageSource = "assests/" + randomNumber + ".jpg";
  var img = document.createElement("img");
  img.setAttribute("src", randomImageSource);

  cards[i].appendChild(img);
}


var previousC = null; 
var count = 0;
var score = 0;

for (let i = 0; i < numCards; i++) {
    document.querySelectorAll(".card")[i].addEventListener("click", function () {

      var currentC = this;

      // Check if previousC is not null and is different from currentC
      if (previousC === null) {
        previousC = currentC;
      }

      clicked(currentC);
      count++;

      // Update previousC to the current card
      if(count === 2){
        check(previousC,currentC);
        previousC = null;
        count = 0;
      }

    });
}


function clicked(currentKey){

  currentKey.classList.add("pressed");
  setTimeout(function(){
    currentKey.classList.remove("pressed");
  },100);

  setTimeout(function(){
    currentKey.classList.remove("front");
  },375);

  setTimeout(function(){
    currentKey.classList.add("flipped");
  },100);

} 


function check(c1,c2) {
  var card1 = c1.querySelector("img").getAttribute("src");
  var card2 = c2.querySelector("img").getAttribute("src");

  if (card1 === card2 && c1.id !== c2.id) {
    score++;

  }else{
    setTimeout(function () {
    c1.classList.remove("flipped");
    c1.classList.add("front");
    c2.classList.remove("flipped");
    c2.classList.add("front");
    }, 1000); 
  }
}
